import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Theme } from '../types/portfolio';

interface AnimatedBackgroundProps {
  theme: Theme;
}

interface NodePoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const pointer = { x: -9999, y: -9999 };
    const nodeCount = width < 768 ? 24 : 44;
    const maxLinkDist = width < 768 ? 120 : 155;

    const nodes: NodePoint[] = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.4 + 1.1,
    }));

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const onPointerMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };
    const onPointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave);

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = theme === 'dark';
      const nodeColor = isDark ? '56, 189, 248' : '37, 99, 235';
      const lineColor = isDark ? '59, 130, 246' : '37, 99, 235';

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        if (!prefersReduced && !document.hidden) {
          n.x += n.vx;
          n.y += n.vy;

          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;

          // Subtle pointer attraction
          const dx = pointer.x - n.x;
          const dy = pointer.y - n.y;
          const distToPointer = Math.hypot(dx, dy);
          if (distToPointer < 170 && distToPointer > 1) {
            n.x += (dx / distToPointer) * 0.18;
            n.y += (dy / distToPointer) * 0.18;
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nodeColor}, ${isDark ? 0.36 : 0.22})`;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dist = Math.hypot(n.x - m.x, n.y - m.y);
          if (dist < maxLinkDist) {
            const alpha = (1 - dist / maxLinkDist) * (isDark ? 0.18 : 0.11);
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Connect node to cursor if nearby
        const pDist = Math.hypot(pointer.x - n.x, pointer.y - n.y);
        if (pDist < 170) {
          const alpha = (1 - pDist / 170) * (isDark ? 0.32 : 0.2);
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.strokeStyle = `rgba(${nodeColor}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      if (!prefersReduced) {
        animationId = requestAnimationFrame(drawFrame);
      }
    };

    drawFrame();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
    };
  }, [theme, prefersReduced]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Subtle architectural coordinate grid */}
      <div className="absolute inset-0 bg-arch-grid opacity-70" />

      {/* Smoothly drifting ambient cobalt & sky gradient auras (GPU transform only) */}
      <motion.div
        animate={
          prefersReduced
            ? undefined
            : {
                x: [0, 48, -24, 0],
                y: [0, -32, 24, 0],
                scale: [1, 1.08, 0.96, 1],
              }
        }
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-24 -top-24 h-[480px] w-[480px] rounded-full bg-blue-500/12 blur-3xl dark:bg-blue-600/14"
      />

      <motion.div
        animate={
          prefersReduced
            ? undefined
            : {
                x: [0, -54, 30, 0],
                y: [0, 40, -28, 0],
                scale: [1, 0.94, 1.06, 1],
              }
        }
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-32 -right-24 h-[520px] w-[520px] rounded-full bg-sky-400/12 blur-3xl dark:bg-sky-500/12"
      />

      {/* Interactive Neural Constellation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
};
