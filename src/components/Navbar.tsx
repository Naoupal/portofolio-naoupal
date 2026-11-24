import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { translations } from '../data/translations';
import { Language, RoutePath, Theme } from '../types/portfolio';

interface NavbarProps {
  route: RoutePath;
  onNavigate: (route: RoutePath) => void;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  theme: Theme;
  onThemeToggle: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  route,
  onNavigate,
  lang,
  onLanguageChange,
  theme,
  onThemeToggle,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    setMobileOpen(false);
  }, [route]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  const navItems: { label: string; target: RoutePath; active: boolean }[] = [
    { label: t.nav.home, target: { page: 'home' }, active: route.page === 'home' },
    { label: t.nav.about, target: { page: 'about' }, active: route.page === 'about' },
    { label: t.nav.projects, target: { page: 'projects' }, active: route.page === 'projects' },
    { label: t.nav.blog, target: { page: 'blog' }, active: route.page === 'blog' },
    { label: t.nav.contact, target: { page: 'contact' }, active: route.page === 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, target: RoutePath) => {
    e.preventDefault();
    onNavigate(target);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-slate-50/90 backdrop-blur-md transition-colors duration-200 dark:border-slate-800/80 dark:bg-[#020617]/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, { page: 'home' })}
          className="font-display text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 transition-colors hover:text-blue-600 dark:text-slate-50 dark:hover:text-blue-400"
        >
          Naufal Atmaja
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.target.page}
              href={`/${item.target.page === 'home' ? '' : item.target.page}`}
              aria-current={item.active ? 'page' : undefined}
              onClick={(e) => handleLinkClick(e, item.target)}
              className={`relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                item.active
                  ? 'text-slate-900 dark:text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
              }`}
            >
              {item.label}
              {item.active && (
                <motion.span
                  layoutId="nav-underline"
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-blue-600 dark:bg-blue-400"
                />
              )}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate({ page: 'contact' })}
            className="hidden md:inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-blue-700 active:scale-[0.98] dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            {t.nav.cta}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 md:hidden dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-slate-200 bg-white px-4 pb-6 pt-4 md:hidden dark:border-slate-800 dark:bg-[#0B1120]"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.target.page}
                  href={`/${item.target.page === 'home' ? '' : item.target.page}`}
                  aria-current={item.active ? 'page' : undefined}
                  onClick={(e) => handleLinkClick(e, item.target)}
                  className={`flex min-h-11 items-center rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                    item.active
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/70'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4 dark:border-slate-800">
              <div
                className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-100 p-1 dark:border-slate-800 dark:bg-slate-900"
                role="group"
                aria-label={t.utility.languageLabel}
              >
                <button
                  type="button"
                  onClick={() => onLanguageChange('en')}
                  className={`min-h-9 rounded-md px-3 py-1 text-xs font-semibold transition-colors ${
                    lang === 'en'
                      ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-800 dark:text-white'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => onLanguageChange('id')}
                  className={`min-h-9 rounded-md px-3 py-1 text-xs font-semibold transition-colors ${
                    lang === 'id'
                      ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-800 dark:text-white'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  ID
                </button>
              </div>

              <button
                type="button"
                onClick={onThemeToggle}
                className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="h-4 w-4 text-amber-400" />
                    <span>{t.utility.light}</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4 text-blue-600" />
                    <span>{t.utility.dark}</span>
                  </>
                )}
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                onNavigate({ page: 'contact' });
                setMobileOpen(false);
              }}
              className="mt-4 flex min-h-11 w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              {t.nav.cta}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
