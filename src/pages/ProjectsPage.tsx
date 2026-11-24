import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CaseStudyModal } from '../components/CaseStudyModal';
import { SpotlightCard } from '../components/MotionPrimitives';
import { ProjectVisual } from '../components/ProjectVisual';
import { RepoExplorer } from '../components/RepoExplorer';
import { CASE_STUDIES } from '../data/portfolioData';
import { translations } from '../data/translations';
import { CaseStudy, GitHubRepo, Language } from '../types/portfolio';

interface ProjectsPageProps {
  lang: Language;
  repos: GitHubRepo[];
  loading: boolean;
  isLive: boolean;
  lastSyncedAt: string | null;
  onRefresh: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  lang,
  repos,
  loading,
  isLive,
  lastSyncedAt,
  onRefresh,
}) => {
  const t = translations[lang];
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pt-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-xs font-semibold tracking-wide text-blue-600 dark:text-sky-400">
          {t.featured.kicker}
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl [text-wrap:balance]">
          {t.featured.title}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
          {t.featured.subtitle}
        </p>
      </motion.div>

      {/* Case Studies Bento Grid */}
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {CASE_STUDIES.map((cs, idx) => (
          <SpotlightCard key={cs.id} delay={idx * 0.06} className="rounded-3xl">
            <article className="flex h-full flex-col justify-between">
              <div>
                <ProjectVisual
                  type={cs.visualType}
                  className="h-44 w-full border-b border-slate-100 dark:border-slate-800"
                />
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-blue-600 dark:text-sky-400">
                      {cs.badge[lang]}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{cs.date}</span>
                  </div>

                  <h2 className="mt-2 font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {cs.title[lang]}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {cs.summary[lang]}
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-100 px-6 py-4 dark:border-slate-800">
                <div className="mb-3 flex items-baseline justify-between gap-2">
                  <span className="font-mono text-2xl font-bold tabular-nums text-slate-900 dark:text-white">
                    {cs.metricValue}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {cs.metricLabel[lang]}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedCase(cs)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-sky-400 dark:hover:text-sky-300"
                  >
                    <span>{t.featured.inspectCase}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <a
                    href={cs.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                  >
                    <span>{t.featured.viewRepo}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          </SpotlightCard>
        ))}
      </div>

      {/* Full Live GitHub Explorer */}
      <section className="mt-16 border-t border-slate-200 pt-14 dark:border-slate-800">
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-wide text-blue-600 dark:text-sky-400">
            {t.repos.kicker}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.repos.title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {t.repos.subtitle}
          </p>
        </div>

        <RepoExplorer
          repos={repos}
          loading={loading}
          isLive={isLive}
          lastSyncedAt={lastSyncedAt}
          onRefresh={onRefresh}
          lang={lang}
          showLanguageChart
        />
      </section>

      <CaseStudyModal
        caseStudy={selectedCase}
        onClose={() => setSelectedCase(null)}
        lang={lang}
      />
    </div>
  );
};
