import React from 'react';
import { motion } from 'motion/react';

interface ProjectVisualProps {
  type: 'multimodal' | 'antispoofing' | 'granite' | 'forecasting';
  className?: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ type, className = '' }) => {
  if (type === 'multimodal') {
    return (
      <div
        aria-hidden="true"
        className={`relative overflow-hidden bg-slate-100 dark:bg-[#060B19] ${className}`}
      >
        <svg viewBox="0 0 480 260" className="h-full w-full" fill="none">
          <defs>
            <linearGradient id="mm-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.04" />
            </linearGradient>
          </defs>
          <rect width="480" height="260" fill="url(#mm-grad)" />
          <g className="stroke-slate-300/80 dark:stroke-slate-800/90" strokeWidth="1">
            <path d="M40 50 H440 M40 130 H440 M40 210 H440" strokeDasharray="4 4" />
            <path d="M120 20 V240 M260 20 V240 M390 20 V240" strokeDasharray="4 4" />
          </g>

          {/* Three modality nodes */}
          <rect
            x="46"
            y="38"
            width="116"
            height="42"
            rx="10"
            className="fill-white stroke-slate-300 dark:fill-slate-900/90 dark:stroke-slate-700"
          />
          <text
            x="104"
            y="64"
            textAnchor="middle"
            className="fill-slate-800 dark:fill-slate-200 font-mono text-[11px] font-medium"
          >
            IndoBERT
          </text>

          <rect
            x="46"
            y="109"
            width="116"
            height="42"
            rx="10"
            className="fill-white stroke-slate-300 dark:fill-slate-900/90 dark:stroke-slate-700"
          />
          <text
            x="104"
            y="135"
            textAnchor="middle"
            className="fill-slate-800 dark:fill-slate-200 font-mono text-[11px] font-medium"
          >
            MobileNetV3
          </text>

          <rect
            x="46"
            y="180"
            width="116"
            height="42"
            rx="10"
            className="fill-white stroke-slate-300 dark:fill-slate-900/90 dark:stroke-slate-700"
          />
          <text
            x="104"
            y="206"
            textAnchor="middle"
            className="fill-slate-800 dark:fill-slate-200 font-mono text-[11px] font-medium"
          >
            Wav2Vec2
          </text>

          {/* Static track lines */}
          <path
            d="M162 59 C220 59, 220 130, 272 130 M162 130 H272 M162 201 C220 201, 220 130, 272 130"
            className="stroke-blue-500/35"
            strokeWidth="2"
          />

          {/* Animated signal flow */}
          <motion.path
            d="M162 59 C220 59, 220 130, 272 130"
            stroke="#38BDF8"
            strokeWidth="2.2"
            strokeDasharray="10 18"
            animate={{ strokeDashoffset: [0, -56] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
          />
          <motion.path
            d="M162 130 H272"
            stroke="#3B82F6"
            strokeWidth="2.2"
            strokeDasharray="10 18"
            animate={{ strokeDashoffset: [0, -56] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
          />
          <motion.path
            d="M162 201 C220 201, 220 130, 272 130"
            stroke="#38BDF8"
            strokeWidth="2.2"
            strokeDasharray="10 18"
            animate={{ strokeDashoffset: [0, -56] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
          />

          {/* Late fusion hub */}
          <rect
            x="272"
            y="94"
            width="158"
            height="72"
            rx="14"
            className="fill-blue-600/15 stroke-blue-500"
            strokeWidth="1.5"
          />
          <text
            x="351"
            y="122"
            textAnchor="middle"
            className="fill-blue-700 dark:fill-sky-300 font-mono text-[11px] font-semibold"
          >
            LATE FUSION
          </text>
          <text
            x="351"
            y="146"
            textAnchor="middle"
            className="fill-slate-900 dark:fill-white font-mono text-[15px] font-bold"
          >
            95.72% ACC
          </text>
        </svg>
      </div>
    );
  }

  if (type === 'antispoofing') {
    return (
      <div
        aria-hidden="true"
        className={`relative overflow-hidden bg-slate-100 dark:bg-[#060B19] ${className}`}
      >
        <svg viewBox="0 0 480 260" className="h-full w-full" fill="none">
          <defs>
            <radialGradient id="as-grad" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#020617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="480" height="260" fill="url(#as-grad)" />

          {/* Multi-Zoom TTA Concentric Bounding Boxes */}
          <motion.rect
            x="130"
            y="26"
            width="220"
            height="208"
            rx="18"
            stroke="#38BDF8"
            strokeOpacity="0.45"
            strokeDasharray="6 4"
            strokeWidth="1.5"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '240px 130px' }}
          />
          <rect
            x="156"
            y="48"
            width="168"
            height="164"
            rx="14"
            stroke="#3B82F6"
            strokeOpacity="0.7"
            strokeWidth="1.5"
          />
          <rect
            x="182"
            y="72"
            width="116"
            height="116"
            rx="12"
            className="fill-blue-600/10 stroke-blue-500"
            strokeWidth="2"
          />

          {/* Facial alignment landmarks */}
          <circle cx="218" cy="116" r="4" fill="#38BDF8" />
          <circle cx="262" cy="116" r="4" fill="#38BDF8" />
          <circle cx="240" cy="136" r="3.5" fill="#38BDF8" />
          <path d="M222 158 Q240 168 258 158" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />

          {/* Animated Biometric Scan Line */}
          <motion.line
            x1="186"
            x2="294"
            y1="82"
            y2="82"
            stroke="#38BDF8"
            strokeWidth="2"
            strokeOpacity="0.85"
            animate={{ y1: [80, 178, 80], y2: [80, 178, 80] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Corner brackets */}
          <path d="M120 44 V26 H138 M342 26 H360 V44 M120 216 V234 H138 M342 234 H360 V216" stroke="#3B82F6" strokeWidth="2.5" />

          <text x="38" y="46" className="fill-slate-600 dark:fill-slate-400 font-mono text-[10px]">
            MTCNN + TTA x3
          </text>
          <text
            x="38"
            y="224"
            className="fill-blue-700 dark:fill-sky-300 font-mono text-[12px] font-semibold"
          >
            CV 96.76%
          </text>
        </svg>
      </div>
    );
  }

  if (type === 'granite') {
    const bars = [
      { x: 68, h: 72, y: 138, cls: 'fill-slate-300 dark:fill-slate-700', fill: undefined, delay: 0 },
      { x: 128, h: 104, y: 106, cls: 'fill-slate-400 dark:fill-slate-600', fill: undefined, delay: 0.08 },
      { x: 188, h: 130, y: 80, cls: '', fill: '#3B82F6', delay: 0.16 },
      { x: 248, h: 156, y: 54, cls: '', fill: '#2563EB', delay: 0.24 },
      { x: 308, h: 118, y: 92, cls: '', fill: '#0EA5E9', delay: 0.32 },
      { x: 368, h: 92, y: 118, cls: 'fill-slate-300 dark:fill-slate-700', fill: undefined, delay: 0.4 },
    ];

    return (
      <div
        aria-hidden="true"
        className={`relative overflow-hidden bg-slate-100 dark:bg-[#060B19] ${className}`}
      >
        <svg viewBox="0 0 480 260" className="h-full w-full" fill="none">
          <g className="stroke-slate-300 dark:stroke-slate-800" strokeWidth="1">
            <line x1="48" y1="210" x2="432" y2="210" />
            <line x1="48" y1="160" x2="432" y2="160" strokeDasharray="3 4" />
            <line x1="48" y1="110" x2="432" y2="110" strokeDasharray="3 4" />
            <line x1="48" y1="60" x2="432" y2="60" strokeDasharray="3 4" />
          </g>

          {bars.map((b, i) => (
            <motion.rect
              key={i}
              x={b.x}
              y={b.y}
              width="42"
              height={b.h}
              rx="6"
              fill={b.fill}
              className={b.cls}
              initial={{ scaleY: 0.2, opacity: 0.4 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: b.delay, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: `${b.x + 21}px 210px` }}
            />
          ))}

          <text
            x="48"
            y="38"
            className="fill-blue-700 dark:fill-sky-300 font-mono text-[11px] font-semibold"
          >
            IBM GRANITE · 3M+ COMPLAINTS
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden bg-slate-100 dark:bg-[#060B19] ${className}`}
    >
      <svg viewBox="0 0 480 260" className="h-full w-full" fill="none">
        <g className="stroke-slate-300 dark:stroke-slate-800" strokeWidth="1">
          <line x1="40" y1="205" x2="440" y2="205" />
          <line x1="40" y1="145" x2="440" y2="145" strokeDasharray="4 4" />
          <line x1="40" y1="85" x2="440" y2="85" strokeDasharray="4 4" />
        </g>
        <motion.path
          d="M44 180 C105 170, 128 110, 184 126 C240 142, 270 68, 332 82 C382 94, 405 56, 438 48"
          stroke="#2563EB"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          d="M44 196 C115 186, 152 156, 210 160 C268 164, 310 120, 368 128 C400 132, 420 112, 438 106"
          stroke="#0EA5E9"
          strokeWidth="2"
          strokeDasharray="5 5"
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.9 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <circle cx="332" cy="82" r="5" fill="#38BDF8" />
        <circle cx="438" cy="48" r="5" fill="#2563EB" />
        <text
          x="44"
          y="42"
          className="fill-blue-700 dark:fill-sky-300 font-mono text-[11px] font-semibold"
        >
          TIME-SERIES &amp; EDA PIPELINE
        </text>
      </svg>
    </div>
  );
};
