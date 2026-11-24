import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Search,
} from 'lucide-react';
import { SpotlightCard } from '../components/MotionPrimitives';
import { ProjectVisual } from '../components/ProjectVisual';
import { BLOG_POSTS } from '../data/portfolioData';
import { translations } from '../data/translations';
import { BlogPost, Language, RoutePath } from '../types/portfolio';

interface BlogPageProps {
  lang: Language;
  slug?: string;
  onNavigate: (route: RoutePath) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ lang, slug, onNavigate }) => {
  const t = translations[lang].blog;
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState(false);

  const activePostIndex = useMemo(
    () => (slug ? BLOG_POSTS.findIndex((p) => p.slug === slug) : -1),
    [slug]
  );
  const activePost: BlogPost | undefined =
    activePostIndex >= 0 ? BLOG_POSTS[activePostIndex] : undefined;

  const categories = useMemo(
    () => Array.from(new Set(BLOG_POSTS.map((p) => p.category))),
    []
  );

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();
    return BLOG_POSTS.filter((post) => {
      const matchesCat =
        selectedCategory === 'ALL' || post.category === selectedCategory;
      if (!matchesCat) return false;
      if (!query) return true;
      return `${post.title[lang]} ${post.excerpt[lang]} ${post.category}`
        .toLowerCase()
        .includes(query);
    });
  }, [selectedCategory, search, lang]);

  const formatDate = (iso: string) => {
    try {
      return new Intl.DateTimeFormat(lang === 'id' ? 'id-ID' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date(iso));
    } catch {
      return iso;
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  if (activePost) {
    const prevPost = activePostIndex > 0 ? BLOG_POSTS[activePostIndex - 1] : null;
    const nextPost =
      activePostIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[activePostIndex + 1] : null;

    return (
      <article className="mx-auto max-w-4xl px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <button
          type="button"
          onClick={() => onNavigate({ page: 'blog' })}
          className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-sky-400"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>{t.backToBlog}</span>
        </button>

        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-blue-600 dark:text-sky-400">
              {activePost.category}
            </span>
            <span aria-hidden="true">·</span>
            <span>{formatDate(activePost.publishedAt)}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">
              {activePost.readTimeMinutes} {t.minRead}
            </span>
          </div>

          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15] [text-wrap:balance]">
            {activePost.title[lang]}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {activePost.excerpt[lang]}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
              ) : (
                <Copy className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              <span>{copied ? t.linkCopied : t.copyLink}</span>
            </button>

            <a
              href={activePost.relatedRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-blue-600 transition-colors hover:border-blue-500 dark:border-slate-800 dark:bg-slate-900 dark:text-sky-400"
            >
              <span>{t.relatedCode}</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </header>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800">
          <ProjectVisual type={activePost.visualType} className="h-56 w-full sm:h-64" />
        </div>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#0B1120]">
          <h2 className="font-display text-sm font-bold text-slate-900 dark:text-white">
            {t.keyTakeaways}
          </h2>
          <ul className="mt-3 space-y-2.5">
            {activePost.keyTakeaways[lang].map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-sky-400" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10 space-y-10">
          {activePost.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                {section.heading[lang]}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-[1.75] text-slate-700 dark:text-slate-300">
                {section.paragraphs[lang].map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>
              {section.codeSnippet && (
                <pre className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-950 p-4 font-mono text-xs leading-relaxed text-slate-100 dark:border-slate-800">
                  <code>{section.codeSnippet.code}</code>
                </pre>
              )}
            </section>
          ))}
        </div>

        <nav
          aria-label="Article navigation"
          className="mt-14 grid gap-4 border-t border-slate-200 pt-8 dark:border-slate-800 sm:grid-cols-2"
        >
          <div>
            {prevPost && (
              <button
                type="button"
                onClick={() => onNavigate({ page: 'blog', slug: prevPost.slug })}
                className="group flex w-full flex-col items-start rounded-2xl border border-slate-200 bg-white p-4 text-left transition-colors hover:border-blue-500/60 dark:border-slate-800 dark:bg-[#0B1120]"
              >
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {t.prevArticle}
                </span>
                <span className="mt-1 font-display text-sm font-semibold text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-sky-400">
                  {prevPost.title[lang]}
                </span>
              </button>
            )}
          </div>
          <div>
            {nextPost && (
              <button
                type="button"
                onClick={() => onNavigate({ page: 'blog', slug: nextPost.slug })}
                className="group flex w-full flex-col items-end rounded-2xl border border-slate-200 bg-white p-4 text-right transition-colors hover:border-blue-500/60 dark:border-slate-800 dark:bg-[#0B1120]"
              >
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {t.nextArticle}
                </span>
                <span className="mt-1 font-display text-sm font-semibold text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-sky-400">
                  {nextPost.title[lang]}
                </span>
              </button>
            )}
          </div>
        </nav>
      </article>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pt-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-xs font-semibold tracking-wide text-blue-600 dark:text-sky-400">
          {t.kicker}
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl [text-wrap:balance]">
          {t.title}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
          {t.subtitle}
        </p>
      </motion.div>

      {/* Filter Toolbar with Animated layoutId Pill Tabs */}
      <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-[#0B1120] md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Blog topics">
          {[
            { key: 'ALL', label: t.allCategories },
            ...categories.map((c) => ({ key: c, label: c })),
          ].map((tab) => {
            const active = selectedCategory === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setSelectedCategory(tab.key)}
                className={`relative rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                  active
                    ? 'text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="blog-cat-tab"
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 rounded-lg bg-slate-900 dark:bg-blue-600"
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="relative w-full md:w-64">
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
      </div>

      {/* Articles Grid */}
      {filteredPosts.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-10 text-center text-sm text-slate-600 dark:border-slate-800 dark:bg-[#0B1120] dark:text-slate-400">
          {t.emptyState}
        </div>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filteredPosts.map((post, idx) => (
            <SpotlightCard key={post.slug} delay={idx * 0.06} className="rounded-3xl">
              <article className="flex h-full flex-col justify-between">
                <div>
                  <ProjectVisual
                    type={post.visualType}
                    className="h-44 w-full border-b border-slate-100 dark:border-slate-800"
                  />
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-blue-600 dark:text-sky-400">
                        {post.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{formatDate(post.publishedAt)}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">
                        {post.readTimeMinutes} {t.minRead}
                      </span>
                    </div>

                    <h2 className="mt-2 font-display text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-sky-400">
                      <button
                        type="button"
                        onClick={() => onNavigate({ page: 'blog', slug: post.slug })}
                        className="text-left focus:outline-none"
                      >
                        {post.title[lang]}
                      </button>
                    </h2>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {post.excerpt[lang]}
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-100 px-6 py-4 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => onNavigate({ page: 'blog', slug: post.slug })}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-sky-400 dark:hover:text-sky-300"
                  >
                    <span>{t.readArticle}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
                  </button>
                </div>
              </article>
            </SpotlightCard>
          ))}
        </div>
      )}
    </div>
  );
};
