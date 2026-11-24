import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface IntroLogoPreloaderProps {
  onComplete: () => void;
}

export const IntroLogoPreloader: React.FC<IntroLogoPreloaderProps> = ({ onComplete }) => {
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const duration = prefersReduced ? 300 : 1450;
    const timer = window.setTimeout(onComplete, duration);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onComplete();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onComplete, prefersReduced]);

  return (
    <motion.div
      role="status"
      aria-label="Loading Naufal Atmaja Portfolio"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: prefersReduced ? 0 : -24,
        transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] },
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-50 px-6 dark:bg-[#020617]"
    >
      {/* Ambient radial glow behind the N emblem */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute h-64 w-64 rounded-full bg-blue-500/15 blur-3xl dark:bg-sky-500/20"
      />

      <div className="relative flex flex-col items-center">
        {/* Architectural Animated "N" Monogram */}
        <motion.svg
          viewBox="0 0 120 120"
          className="h-28 w-28 sm:h-32 sm:w-32"
          fill="none"
          aria-hidden="true"
          initial={{ scale: 0.92 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <defs>
            <linearGradient id="n-logo-grad" x1="20" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#0EA5E9" />
            </linearGradient>
          </defs>

          {/* Outer geometric octagonal frame */}
          <motion.path
            d="M32 10 H88 L110 32 V88 L88 110 H32 L10 88 V32 Z"
            className="stroke-slate-300 dark:stroke-slate-800"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Inner continuous architectural "N" stroke */}
          <motion.path
            d="M37 86 V34 L83 86 V34"
            stroke="url(#n-logo-grad)"
            strokeWidth="6.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0.2 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.78, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Subtle neural corner nodes on the N endpoints */}
          <motion.circle
            cx="37"
            cy="34"
            r="3.5"
            fill="#38BDF8"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.35 }}
          />
          <motion.circle
            cx="83"
            cy="86"
            r="3.5"
            fill="#2563EB"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.65 }}
          />
          <motion.circle
            cx="83"
            cy="34"
            r="3.5"
            fill="#38BDF8"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.85 }}
          />
        </motion.svg>

        {/* Clean Typographic Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 text-center"
        >
          <div className="font-display text-sm font-semibold tracking-[0.26em] text-slate-900 dark:text-slate-100">
            NAUFAL ATMAJA
          </div>
          <div className="mt-1.5 font-mono text-[11px] tracking-widest text-blue-600 dark:text-sky-400">
            DATA SCIENCE · AI · ENGINEERING
          </div>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={onComplete}
        className="mt-10 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
      >
        Skip
      </button>
    </motion.div>
  );
};
