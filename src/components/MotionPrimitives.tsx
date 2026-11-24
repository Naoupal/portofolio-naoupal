import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-blue-600 via-sky-400 to-blue-500"
    />
  );
};

interface AnimatedCounterProps {
  value: number;
  decimals?: number;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  decimals = 0,
  suffix = '',
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReduced = useReducedMotion();
  const [display, setDisplay] = useState(prefersReduced ? value : 0);

  useEffect(() => {
    if (prefersReduced) {
      setDisplay(value);
      return;
    }
    if (!inView) return;

    let frame = 0;
    const duration = 900;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDisplay(value);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, prefersReduced]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
};

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);
  const prefersReduced = useReducedMotion();

  const spotlightBg = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, rgba(56, 189, 248, 0.14), transparent 75%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-300);
    mouseY.set(-300);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.28, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={prefersReduced ? undefined : { y: -3 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white transition-colors duration-200 hover:border-blue-500/50 dark:border-slate-800/90 dark:bg-[#0B1120] dark:hover:border-sky-400/40 ${className}`}
    >
      <motion.div
        aria-hidden="true"
        style={{ background: spotlightBg }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
};

interface TiltShowcaseProps {
  children: React.ReactNode;
  className?: string;
}

export const TiltShowcase: React.FC<TiltShowcaseProps> = ({ children, className = '' }) => {
  const prefersReduced = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(rawX, { stiffness: 160, damping: 22 });
  const rotateY = useSpring(rawY, { stiffness: 160, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rawX.set(-py * 7);
    rawY.set(px * 7);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <div style={{ perspective: 1100 }} className={className}>
      <motion.div
        style={prefersReduced ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

interface MarqueeRibbonProps {
  items: string[];
}

export const MarqueeRibbon: React.FC<MarqueeRibbonProps> = ({ items }) => {
  const content = (
    <div className="flex shrink-0 items-center gap-6 pr-6">
      {items.map((item, idx) => (
        <span
          key={`${item}-${idx}`}
          className="inline-flex items-center gap-6 font-mono text-xs font-medium tracking-wider text-slate-500 dark:text-slate-400"
        >
          <span>{item}</span>
          <span className="text-blue-600 dark:text-sky-400" aria-hidden="true">
            /
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-slate-200/80 bg-white/60 py-3.5 backdrop-blur-xs dark:border-slate-800/80 dark:bg-[#070D1D]/70"
    >
      <div className="flex w-max animate-marquee">
        {content}
        {content}
      </div>
    </div>
  );
};
