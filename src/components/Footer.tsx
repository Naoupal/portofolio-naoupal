import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { translations } from '../data/translations';
import { Language, RoutePath, Theme } from '../types/portfolio';

interface FooterProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  theme: Theme;
  onThemeToggle: () => void;
  onNavigate: (route: RoutePath) => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onLanguageChange,
  theme,
  onThemeToggle,
  onNavigate,
}) => {
  const t = translations[lang];

  const links: { label: string; route: RoutePath }[] = [
    { label: t.nav.home, route: { page: 'home' } },
    { label: t.nav.about, route: { page: 'about' } },
    { label: t.nav.projects, route: { page: 'projects' } },
    { label: t.nav.blog, route: { page: 'blog' } },
    { label: t.nav.contact, route: { page: 'contact' } },
  ];

  const socials = [
    { label: 'GitHub', href: 'https://github.com/Naoupal' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/naufalatmajafaadihilah/' },
    { label: 'Instagram', href: 'https://www.instagram.com/naoupal_' },
    { label: 'naufalatmaja.f@gmail.com', href: 'mailto:naufalatmaja.f@gmail.com' },
  ];

  return (
    <footer className="relative z-10 border-t border-slate-200/80 bg-white/85 backdrop-blur-md transition-colors dark:border-slate-800/80 dark:bg-[#020617]/85">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              Naufal Atmaja Faadihilah
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {t.footer.tagline}
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">
              {t.footer.navigationTitle}
            </h3>
            <ul className="mt-3 space-y-2">
              {links.map((item) => (
                <li key={item.route.page}>
                  <a
                    href={`/${item.route.page === 'home' ? '' : item.route.page}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.route);
                    }}
                    className="text-sm text-slate-700 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">
              {t.footer.connectTitle}
            </h3>
            <ul className="mt-3 space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1 text-sm text-slate-700 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                  >
                    <span>{s.label}</span>
                    {s.href.startsWith('http') && (
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">
              {t.footer.preferencesTitle}
            </h3>
            <div className="mt-3 flex flex-col gap-2">
              <div className="inline-flex w-fit rounded-lg border border-slate-200 p-0.5 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => onLanguageChange('en')}
                  className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                    lang === 'en'
                      ? 'bg-slate-900 text-white dark:bg-blue-600'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => onLanguageChange('id')}
                  className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                    lang === 'id'
                      ? 'bg-slate-900 text-white dark:bg-blue-600'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  ID
                </button>
              </div>
              <button
                type="button"
                onClick={onThemeToggle}
                className="w-fit rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
              >
                {theme === 'dark' ? t.utility.light : t.utility.dark}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
};
