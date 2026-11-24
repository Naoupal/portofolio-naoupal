import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Layers } from 'lucide-react';
import { CaseStudyModal } from '../components/CaseStudyModal';
import { ContactWizard } from '../components/ContactWizard';
import {
  AnimatedCounter,
  MarqueeRibbon,
  SpotlightCard,
  TiltShowcase,
} from '../components/MotionPrimitives';
import { OptimizedAvatar } from '../components/OptimizedAvatar';
import { ProjectVisual } from '../components/ProjectVisual';
import { RepoExplorer } from '../components/RepoExplorer';
import { BLOG_POSTS, CASE_STUDIES } from '../data/portfolioData';
import { translations } from '../data/translations';
import { CaseStudy, GitHubRepo, GitHubUser, Language, RoutePath } from '../types/portfolio';

interface HomePageProps {
  lang: Language;
  user: GitHubUser;
  repos: GitHubRepo[];
  loading: boolean;
  isLive: boolean;
  lastSyncedAt: string | null;
  onRefresh: () => void;
  onNavigate: (route: RoutePath) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  lang,
  user,
  repos,
  loading,
  isLive,
  lastSyncedAt,
  onRefresh,
  onNavigate,
}) => {
  const t = translations[lang];
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [activePillar, setActivePillar] = useState<number>(0);

  const formatDate = (iso: string) => {
    try {
      return new Intl.DateTimeFormat(lang === 'id' ? 'id-ID' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }).format(new Date(iso));
    } catch {
      return iso;
    }
  };

  const marqueeItems = [
    'PYTHON',
    'PYTORCH',
    'INDOBERT',
    'COMPUTER VISION',
    'MULTIMODAL AI',
    'SQL & MYSQL',
    'TABLEAU & STREAMLIT',
    'IBM GRANITE',
  ];

  const leadCase = CASE_STUDIES[0];
  const secondaryCases = CASE_STUDIES.slice(1);
  const pillarVisualMap: ('granite' | 'multimodal' | 'antispoofing')[] = [
    'granite',
    'multimodal',
    'antispoofing',
  ];

  return (
    <div className="relative overflow-x-clip">
      {/* 1. Split-Screen Hero with 3D Interactive Monolith */}
      <section className="relative mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
          {/* Left Column: Staggered Typographic Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            <p className="text-xs font-semibold tracking-wide text-blue-600 dark:text-sky-400">
              {t.hero.kicker}
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-[3.45rem] lg:leading-[1.08] [text-wrap:balance]">
              {t.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              {t.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate({ page: 'projects' })}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-blue-700"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </motion.button>
              <motion.a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-slate-300 bg-white/90 px-5 py-2.5 text-sm font-semibold text-slate-900 whitespace-nowrap shrink-0 backdrop-blur-xs transition-colors hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-sky-400 dark:hover:text-sky-400"
              >
                <span>{t.hero.secondaryCta}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: 3D Tilt Architectural Monolith Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <TiltShowcase className="h-full">
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-[#0B1120]/95">
                {/* Architectural Corner Framing Marks */}
                <span aria-hidden="true" className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l-2 border-t-2 border-blue-500/40 rounded-tl-xs" />
                <span aria-hidden="true" className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r-2 border-t-2 border-blue-500/40 rounded-tr-xs" />
                <span aria-hidden="true" className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-blue-500/40 rounded-bl-xs" />
                <span aria-hidden="true" className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-blue-500/40 rounded-br-xs" />

                <div className="flex items-center gap-5">
                  {/* Avatar with smooth rotating orbital geometry */}
                  <div className="relative shrink-0 p-1.5">
                    <motion.svg
                      aria-hidden="true"
                      viewBox="0 0 120 120"
                      className="pointer-events-none absolute inset-0 h-full w-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                    >
                      <circle
                        cx="60"
                        cy="60"
                        r="57"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeDasharray="10 8"
                        className="text-blue-500/45 dark:text-sky-400/45"
                      />
                    </motion.svg>
                    <OptimizedAvatar
                      src={user.avatar_url}
                      alt={t.hero.avatarAlt}
                      size={240}
                      priority
                      className="relative h-24 w-24 rounded-full border border-slate-200 dark:border-slate-700 sm:h-28 sm:w-28"
                    />
                  </div>

                  <div className="min-w-0">
                    <h2 className="font-display text-lg font-bold text-slate-900 dark:text-white truncate">
                      {user.name || 'Naufal Atmaja Faadihilah'}
                    </h2>
                    <p className="font-mono text-xs text-blue-600 dark:text-sky-400">
                      @{user.login}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      {t.hero.roleLine}
                    </p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {t.hero.locationLine}
                    </p>
                  </div>
                </div>

                <div className="my-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                  <ProjectVisual type="multimodal" className="h-40 w-full" />
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4 dark:border-slate-800">
                  <div>
                    <div className="font-mono text-2xl font-bold tabular-nums text-slate-900 dark:text-white">
                      <AnimatedCounter value={user.public_repos} />
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {t.hero.reposLabel}
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-2xl font-bold tabular-nums text-slate-900 dark:text-white">
                      <AnimatedCounter value={user.followers} />
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {t.hero.followersLabel}
                    </div>
                  </div>
                </div>
              </div>
            </TiltShowcase>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Quantitative Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 grid grid-cols-2 gap-6 rounded-2xl border border-slate-200/90 bg-white/80 px-6 py-6 backdrop-blur-xs dark:border-slate-800/90 dark:bg-[#0B1120]/80 lg:grid-cols-4"
        >
          <div>
            <div className="font-mono text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              <AnimatedCounter value={95.72} decimals={2} suffix="%" />
            </div>
            <div className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-200">
              {t.metrics.hoaxLabel}
            </div>
            <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              {t.metrics.hoaxSub}
            </div>
          </div>

          <div>
            <div className="font-mono text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              <AnimatedCounter value={96.76} decimals={2} suffix="%" />
            </div>
            <div className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-200">
              {t.metrics.spoofLabel}
            </div>
            <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              {t.metrics.spoofSub}
            </div>
          </div>

          <div>
            <div className="font-mono text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              <AnimatedCounter value={3} suffix="M+" />
            </div>
            <div className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-200">
              {t.metrics.recordsLabel}
            </div>
            <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              {t.metrics.recordsSub}
            </div>
          </div>

          <div>
            <div className="font-mono text-2xl font-bold text-blue-600 dark:text-sky-400 sm:text-3xl">
              <AnimatedCounter value={repos.length} />
            </div>
            <div className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-200">
              {t.metrics.reposLabel}
            </div>
            <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              {t.metrics.reposSub}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Editorial Marquee Ribbon Divider */}
      <MarqueeRibbon items={marqueeItems} />

      {/* 2. Interactive Data & Engineering Pillars */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-xs font-semibold tracking-wide text-blue-600 dark:text-sky-400">
              {t.approach.kicker}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white [text-wrap:balance]">
              {t.approach.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {t.approach.intro}
            </p>

            {/* Interactive Architecture Preview synced to active pillar */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-[#0B1120]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePillar}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProjectVisual
                    type={pillarVisualMap[activePillar]}
                    className="h-44 w-full"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="flex items-center justify-between border-t border-slate-100 px-4 py-3 text-xs dark:border-slate-800">
                <span className="inline-flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-200">
                  <Layers className="h-3.5 w-3.5 text-blue-600 dark:text-sky-400" aria-hidden="true" />
                  {t.approach.pillars[activePillar].title}
                </span>
                <span className="font-mono tabular-nums text-blue-600 dark:text-sky-400">
                  {t.approach.pillars[activePillar].stat}
                </span>
              </div>
            </div>
          </motion.div>

          <div className="space-y-3 lg:col-span-7">
            {t.approach.pillars.map((pillar, index) => {
              const isSelected = activePillar === index;
              return (
                <motion.button
                  key={pillar.number}
                  type="button"
                  onClick={() => setActivePillar(index)}
                  onMouseEnter={() => setActivePillar(index)}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.25, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-full rounded-2xl border p-6 text-left transition-all duration-200 ${
                    isSelected
                      ? 'border-blue-500/70 bg-white shadow-sm dark:border-sky-400/50 dark:bg-[#0B1120]'
                      : 'border-slate-200/80 bg-white/60 hover:border-slate-300 dark:border-slate-800/80 dark:bg-[#0B1120]/50 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="grid gap-3 sm:grid-cols-12 sm:items-start">
                    <div
                      className={`font-mono text-sm font-semibold tabular-nums sm:col-span-2 ${
                        isSelected
                          ? 'text-blue-600 dark:text-sky-400'
                          : 'text-slate-400 dark:text-slate-500'
                      }`}
                    >
                      {pillar.number}.
                    </div>
                    <div className="sm:col-span-10">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                          {pillar.title}
                        </h3>
                        <span className="font-mono text-xs tabular-nums text-slate-500 dark:text-slate-400">
                          {pillar.stat}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Asymmetric Bento Grid: Featured Case Studies */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-wide text-blue-600 dark:text-sky-400">
              {t.featured.kicker}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t.featured.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {t.featured.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate({ page: 'projects' })}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-sky-400 dark:hover:text-sky-300"
          >
            <span>{t.featured.viewAll}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Asymmetric Bento Box Layout: Wide Lead Showcase + Two Secondary Cards */}
        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          {/* Lead Wide Bento Card (12 cols split internally) */}
          <SpotlightCard className="lg:col-span-12 rounded-3xl">
            <div className="grid lg:grid-cols-12 lg:items-stretch">
              <div className="border-b border-slate-100 dark:border-slate-800 lg:col-span-6 lg:border-b-0 lg:border-r">
                <ProjectVisual type={leadCase.visualType} className="h-56 w-full lg:h-full" />
              </div>
              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-blue-600 dark:text-sky-400">
                      {leadCase.badge[lang]}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{leadCase.date}</span>
                  </div>

                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {leadCase.title[lang]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {leadCase.summary[lang]}
                  </p>
                  <p className="mt-4 font-mono text-xs text-slate-500 dark:text-slate-400">
                    {leadCase.techStack.join(' · ')}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5 dark:border-slate-800">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-mono text-3xl font-bold tabular-nums text-slate-900 dark:text-white">
                        {leadCase.metricValue}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {leadCase.metricLabel[lang]}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setSelectedCase(leadCase)}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700"
                      >
                        <span>{t.featured.inspectCase}</span>
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                      <a
                        href={leadCase.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                      >
                        <span>{t.featured.viewRepo}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Secondary Bento Cards */}
          {secondaryCases.map((cs, idx) => (
            <SpotlightCard key={cs.id} delay={idx * 0.08} className="lg:col-span-6 rounded-3xl">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <ProjectVisual
                    type={cs.visualType}
                    className="h-48 w-full border-b border-slate-100 dark:border-slate-800"
                  />
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-blue-600 dark:text-sky-400">
                        {cs.badge[lang]}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono">{cs.date}</span>
                    </div>

                    <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                      {cs.title[lang]}
                    </h3>
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
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* 4. Live GitHub Repositories Section */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <p className="text-xs font-semibold tracking-wide text-blue-600 dark:text-sky-400">
            {t.repos.kicker}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.repos.title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {t.repos.subtitle}
          </p>
        </motion.div>

        <RepoExplorer
          repos={repos}
          loading={loading}
          isLive={isLive}
          lastSyncedAt={lastSyncedAt}
          onRefresh={onRefresh}
          lang={lang}
          limit={6}
          onViewAll={() => onNavigate({ page: 'projects' })}
        />
      </section>

      {/* 5. Latest Blog Preview */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-wide text-blue-600 dark:text-sky-400">
              {t.blog.kicker}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t.blog.previewTitle}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {t.blog.previewSubtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate({ page: 'blog' })}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-sky-400 dark:hover:text-sky-300"
          >
            <span>{t.blog.viewAllPosts}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {BLOG_POSTS.slice(0, 3).map((post, idx) => (
            <SpotlightCard key={post.slug} delay={idx * 0.06} className="rounded-2xl">
              <article className="flex h-full flex-col justify-between p-6">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-blue-600 dark:text-sky-400">
                      {post.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{formatDate(post.publishedAt)}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">
                      {post.readTimeMinutes} {t.blog.minRead}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-sky-400">
                    <button
                      type="button"
                      onClick={() => onNavigate({ page: 'blog', slug: post.slug })}
                      className="text-left focus:outline-none"
                    >
                      {post.title[lang]}
                    </button>
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {post.excerpt[lang]}
                  </p>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-4 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => onNavigate({ page: 'blog', slug: post.slug })}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-sky-400 dark:hover:text-sky-300"
                  >
                    <span>{t.blog.readArticle}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
                  </button>
                </div>
              </article>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* 6. Interactive 2-Step Contact Section */}
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <div className="border-t border-slate-200 pt-14 dark:border-slate-800">
          <ContactWizard lang={lang} />
        </div>
      </section>

      <CaseStudyModal
        caseStudy={selectedCase}
        onClose={() => setSelectedCase(null)}
        lang={lang}
      />
    </div>
  );
};
