import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Check, X } from 'lucide-react';
import { translations } from '../data/translations';
import { CaseStudy, Language } from '../types/portfolio';
import { ProjectVisual } from './ProjectVisual';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  lang: Language;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  lang,
}) => {
  const t = translations[lang].featured;

  useEffect(() => {
    if (!caseStudy) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [caseStudy, onClose]);

  return (
    <AnimatePresence>
      {caseStudy && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-xs"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-modal-title"
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-[#0B1120]"
          >
            <div className="relative">
              <ProjectVisual type={caseStudy.visualType} className="h-52 w-full" />
              <button
                type="button"
                onClick={onClose}
                aria-label={t.closeModal}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200/80 bg-white/90 text-slate-800 backdrop-blur-xs transition-colors hover:bg-white dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100 dark:hover:bg-slate-900"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-medium text-blue-600 dark:text-blue-400">
                  {caseStudy.badge[lang]}
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-mono">{caseStudy.date}</span>
              </div>

              <h3
                id="case-study-modal-title"
                className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
              >
                {caseStudy.title[lang]}
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                {caseStudy.subtitle[lang]}
              </p>

              <div className="mt-6 flex items-baseline gap-3 border-y border-slate-200 py-4 dark:border-slate-800">
                <span className="font-mono text-3xl font-bold tabular-nums text-blue-600 dark:text-blue-400">
                  {caseStudy.metricValue}
                </span>
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  {caseStudy.metricLabel[lang]}
                </span>
              </div>

              <div className="mt-6">
                <h4 className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {t.architectureTitle}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {caseStudy.architectureNote[lang]}
                </p>
              </div>

              <div className="mt-6">
                <h4 className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {t.highlightsTitle}
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {caseStudy.highlights[lang].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-5 dark:border-slate-800">
                <h4 className="font-display text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {t.stackTitle}
                </h4>
                <p className="mt-1.5 font-mono text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                  {caseStudy.techStack.join(' · ')}
                </p>
              </div>

              <div className="mt-7 flex items-center justify-end gap-3">
                <a
                  href={caseStudy.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  <span>{t.viewRepo}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
