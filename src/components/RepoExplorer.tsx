import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowUpRight,
  GitFork,
  RefreshCw,
  Search,
  Star,
  X,
} from 'lucide-react';
import { REPO_BILINGUAL_NOTES } from '../data/portfolioData';
import { translations } from '../data/translations';
import { GitHubRepo, Language } from '../types/portfolio';
import { SpotlightCard } from './MotionPrimitives';

interface RepoExplorerProps {
  repos: GitHubRepo[];
  loading: boolean;
  isLive: boolean;
  lastSyncedAt: string | null;
  onRefresh: () => void;
  lang: Language;
  limit?: number;
  showLanguageChart?: boolean;
  onViewAll?: () => void;
}

type SortKey = 'updated' | 'stars' | 'name';

export const RepoExplorer: React.FC<RepoExplorerProps> = ({
  repos,
  loading,
  isLive,
  lastSyncedAt,
  onRefresh,
  lang,
  limit,
  showLanguageChart = false,
  onViewAll,
}) => {
  const t = translations[lang].repos;
  const [search, setSearch] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<SortKey>('updated');
  const [activeRepo, setActiveRepo] = useState<GitHubRepo | null>(null);

  const languages = useMemo(() => {
    const counts = new Map<string, number>();
    repos.forEach((repo) => {
      const label = repo.language || 'Other';
      counts.set(label, (counts.get(label) || 0) + 1);
    });
    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({ name, count }));
  }, [repos]);

  const filteredRepos = useMemo(() => {
    const query = search.trim().toLowerCase();
    const list = repos.filter((repo) => {
      const repoLang = repo.language || 'Other';
      const matchesLang = selectedLanguage === 'ALL' || repoLang === selectedLanguage;
      if (!matchesLang) return false;
      if (!query) return true;
      const localized = REPO_BILINGUAL_NOTES[repo.name]?.[lang] || '';
      const haystack = `${repo.name} ${repo.description || ''} ${localized} ${repo.topics.join(' ')}`.toLowerCase();
      return haystack.includes(query);
    });

    list.sort((a, b) => {
      if (sortBy === 'stars') return b.stargazers_count - a.stargazers_count;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (
        new Date(b.pushed_at || b.updated_at).getTime() -
        new Date(a.pushed_at || a.updated_at).getTime()
      );
    });

    return typeof limit === 'number' ? list.slice(0, limit) : list;
  }, [repos, search, selectedLanguage, sortBy, limit, lang]);

  const formatDate = (iso: string) => {
    try {
      return new Intl.DateTimeFormat(lang === 'id' ? 'id-ID' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }).format(new Date(iso));
    } catch {
      return iso.slice(0, 10);
    }
  };

  const getRepoDescription = (repo: GitHubRepo) => {
    const bilingual = REPO_BILINGUAL_NOTES[repo.name]?.[lang];
    if (bilingual) return bilingual;
    if (repo.description && repo.description.trim().length > 0) return repo.description;
    return t.noDescription;
  };

  const langColors: Record<string, string> = {
    'Jupyter Notebook': 'bg-amber-500',
    Python: 'bg-blue-500',
    HTML: 'bg-sky-500',
    TypeScript: 'bg-indigo-500',
    JavaScript: 'bg-yellow-400',
    Other: 'bg-slate-400',
  };

  return (
    <div>
      {showLanguageChart && repos.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-[#0B1120]"
        >
          <div className="mb-3 flex items-center justify-between gap-4">
            <h3 className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100">
              {t.languageBreakdown}
            </h3>
            <span className="font-mono text-xs tabular-nums text-slate-500 dark:text-slate-400">
              {repos.length} repositories
            </span>
          </div>
          <div
            className="flex h-2.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"
            role="img"
            aria-label={t.languageBreakdown}
          >
            {languages.map((item) => {
              const pct = (item.count / repos.length) * 100;
              return (
                <motion.div
                  key={item.name}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{ width: `${pct}%`, transformOrigin: 'left' }}
                  className={langColors[item.name] || 'bg-slate-500'}
                  title={`${item.name}: ${item.count}`}
                />
              );
            })}
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-600 dark:text-slate-400">
            {languages.map((item) => {
              const pct = Math.round((item.count / repos.length) * 100);
              return (
                <span key={item.name} className="inline-flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${langColors[item.name] || 'bg-slate-500'}`}
                    aria-hidden="true"
                  />
                  <span>{item.name}</span>
                  <span className="font-mono tabular-nums text-slate-500 dark:text-slate-400">
                    {pct}%
                  </span>
                </span>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Filter & Sync Toolbar */}
      <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-[#0B1120]">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.searchPlaceholder}
              aria-label={t.searchPlaceholder}
              className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortKey)}
              aria-label="Sort repositories"
              className="h-10 rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs font-medium text-slate-700 focus:border-blue-500 focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
            >
              <option value="updated">{t.sortUpdated}</option>
              <option value="stars">{t.sortStars}</option>
              <option value="name">{t.sortName}</option>
            </select>

            <button
              type="button"
              onClick={onRefresh}
              disabled={loading}
              className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-xs font-semibold text-slate-700 whitespace-nowrap shrink-0 transition-colors hover:bg-slate-100 disabled:opacity-60 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} aria-hidden="true" />
              <span>{loading ? t.syncing : t.syncButton}</span>
            </button>
          </div>
        </div>

        {/* Animated Segmented Language Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3 dark:border-slate-800/80">
          <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter by language">
            {[
              { key: 'ALL', label: `${t.allLanguages} (${repos.length})` },
              ...languages.slice(0, 5).map((item) => ({
                key: item.name,
                label: `${item.name} (${item.count})`,
              })),
            ].map((tab) => {
              const active = selectedLanguage === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setSelectedLanguage(tab.key)}
                  className={`relative rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                    active
                      ? 'text-white'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="repo-lang-tab"
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 rounded-lg bg-slate-900 dark:bg-blue-600"
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span>{isLive ? t.liveBadge : t.fallbackBadge}</span>
            {lastSyncedAt && (
              <>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">
                  {t.lastSynced}{' '}
                  {new Date(lastSyncedAt).toLocaleTimeString(lang === 'id' ? 'id-ID' : 'en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Repository Grid with Spotlight Cards */}
      {filteredRepos.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center dark:border-slate-800 dark:bg-[#0B1120]">
          <p className="text-sm text-slate-600 dark:text-slate-400">{t.emptyState}</p>
          <button
            type="button"
            onClick={() => {
              setSearch('');
              setSelectedLanguage('ALL');
            }}
            className="mt-4 inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700"
          >
            {t.resetFilters}
          </button>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredRepos.map((repo, idx) => (
            <SpotlightCard key={repo.id} delay={Math.min(idx * 0.035, 0.18)}>
              <article className="flex h-full flex-col justify-between p-5">
                <div>
                  <div className="mb-2 flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-mono font-medium text-blue-700 dark:text-sky-400">
                      {repo.language || 'Repository'}
                    </span>
                    <span className="font-mono tabular-nums">
                      {formatDate(repo.pushed_at || repo.updated_at)}
                    </span>
                  </div>

                  <h3 className="font-display text-base font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 dark:text-slate-50 dark:group-hover:text-sky-400">
                    <button
                      type="button"
                      onClick={() => setActiveRepo(repo)}
                      className="text-left focus:outline-none"
                    >
                      {repo.name}
                    </button>
                  </h3>

                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {getRepoDescription(repo)}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3.5 text-xs dark:border-slate-800/80">
                  <div className="flex items-center gap-3 font-mono tabular-nums text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" aria-hidden="true" />
                      {repo.stargazers_count}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitFork className="h-3.5 w-3.5" aria-hidden="true" />
                      {repo.forks_count}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveRepo(repo)}
                      className="font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                    >
                      {t.inspectRepo}
                    </button>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${repo.name} — ${t.openOnGithub}`}
                      className="inline-flex items-center gap-1 font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-sky-400 dark:hover:text-sky-300"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            </SpotlightCard>
          ))}
        </div>
      )}

      {onViewAll && repos.length > (limit || 0) && (
        <div className="mt-8 flex justify-start">
          <button
            type="button"
            onClick={onViewAll}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-sky-400 dark:hover:text-sky-400"
          >
            <span>{t.viewAllRepos}</span>
            <span className="font-mono tabular-nums text-xs text-slate-500 dark:text-slate-400">
              ({repos.length})
            </span>
          </button>
        </div>
      )}

      {/* Repository Detail Modal */}
      <AnimatePresence>
        {activeRepo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs"
            onClick={() => setActiveRepo(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="repo-modal-title"
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-[#0B1120]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-mono text-xs text-blue-600 dark:text-sky-400">
                    {activeRepo.full_name}
                  </div>
                  <h3
                    id="repo-modal-title"
                    className="mt-1 font-display text-xl font-bold text-slate-900 dark:text-white"
                  >
                    {activeRepo.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveRepo(null)}
                  aria-label="Close"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {getRepoDescription(activeRepo)}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-100 pt-4 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
                <span>{activeRepo.language || 'Notebook / Code'}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">
                  {activeRepo.stargazers_count} {t.stars}
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">
                  {activeRepo.forks_count} {t.forks}
                </span>
                <span aria-hidden="true">·</span>
                <span>
                  {t.updated} {formatDate(activeRepo.pushed_at || activeRepo.updated_at)}
                </span>
              </div>

              {activeRepo.topics && activeRepo.topics.length > 0 && (
                <p className="mt-3 font-mono text-xs text-slate-500 dark:text-slate-400">
                  {activeRepo.topics.join(' · ')}
                </p>
              )}

              <div className="mt-6 flex items-center justify-end gap-3">
                <a
                  href={activeRepo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  <span>{t.openOnGithub}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
