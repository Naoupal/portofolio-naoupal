import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Award, GraduationCap } from 'lucide-react';
import { SpotlightCard, TiltShowcase } from '../components/MotionPrimitives';
import { OptimizedAvatar } from '../components/OptimizedAvatar';
import { translations } from '../data/translations';
import { GitHubUser, Language, RoutePath } from '../types/portfolio';

interface AboutPageProps {
  lang: Language;
  user: GitHubUser;
  onNavigate: (route: RoutePath) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ lang, user, onNavigate }) => {
  const t = translations[lang];

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pt-12">
      {/* Intro Split */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="grid gap-10 lg:grid-cols-12 lg:items-start"
      >
        <div className="lg:col-span-8">
          <p className="text-xs font-semibold tracking-wide text-blue-600 dark:text-sky-400">
            {t.about.kicker}
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl [text-wrap:balance]">
            {t.about.title}
          </h1>
          <p className="mt-4 text-lg font-medium leading-relaxed text-slate-700 dark:text-slate-200">
            {t.about.lead}
          </p>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {t.about.bioParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate({ page: 'projects' })}
              className="inline-flex min-h-11 items-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              {t.hero.primaryCta}
            </motion.button>
            <motion.a
              href="https://www.linkedin.com/in/naufalatmajafaadihilah/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </motion.a>
          </div>
        </div>

        <div className="lg:col-span-4">
          <TiltShowcase>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#0B1120]">
              <OptimizedAvatar
                src={user.avatar_url}
                alt={t.hero.avatarAlt}
                size={360}
                className="aspect-square w-full rounded-2xl border border-slate-200 dark:border-slate-800"
              />
              <div className="mt-5">
                <div className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  {user.name}
                </div>
                <div className="font-mono text-xs text-blue-600 dark:text-sky-400">
                  @{user.login}
                </div>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  {t.hero.locationLine}
                </p>
              </div>
            </div>
          </TiltShowcase>
        </div>
      </motion.div>

      {/* Education & Milestones */}
      <div className="mt-16 grid gap-10 border-t border-slate-200 pt-14 dark:border-slate-800 lg:grid-cols-2">
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 text-blue-600 dark:text-sky-400">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
            <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t.about.educationTitle}
            </h2>
          </div>

          <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-800 dark:border-slate-800">
            {t.about.education.map((edu) => (
              <div key={edu.school} className="py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                    {edu.school}
                  </h3>
                  <span className="font-mono text-xs tabular-nums text-blue-600 dark:text-sky-400">
                    {edu.period}
                  </span>
                </div>
                <div className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">
                  {edu.degree} · {edu.location}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {edu.notes}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.28, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 text-blue-600 dark:text-sky-400">
            <Award className="h-5 w-5" aria-hidden="true" />
            <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t.about.awardsTitle}
            </h2>
          </div>

          <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-800 dark:border-slate-800">
            {t.about.awards.map((award) => (
              <div key={award.title} className="py-5">
                <div className="font-mono text-xs tabular-nums text-blue-600 dark:text-sky-400">
                  {award.year}
                </div>
                <h3 className="mt-1 font-display text-base font-bold text-slate-900 dark:text-white">
                  {award.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {award.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Technical Stack Matrix */}
      <section className="mt-16 border-t border-slate-200 pt-14 dark:border-slate-800">
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          {t.about.stackTitle}
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          {t.about.stackSubtitle}
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {t.about.stackGroups.map((group, idx) => (
            <SpotlightCard key={group.category} delay={idx * 0.06} className="rounded-2xl">
              <div className="p-6">
                <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                  {group.category}
                </h3>
                <ul className="mt-4 divide-y divide-slate-100 dark:divide-slate-800/80">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="py-2.5 font-mono text-xs text-slate-700 dark:text-slate-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>
    </div>
  );
};
