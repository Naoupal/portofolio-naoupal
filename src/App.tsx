import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Footer } from './components/Footer';
import { IntroLogoPreloader } from './components/IntroLogoPreloader';
import { ScrollProgressBar } from './components/MotionPrimitives';
import { Navbar } from './components/Navbar';
import { PageUtilityBar } from './components/PageUtilityBar';
import { translations } from './data/translations';
import { useGitHubData } from './hooks/useGitHubData';
import { useSeo } from './hooks/useSeo';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { Language, RoutePath, Theme } from './types/portfolio';

function parsePath(pathname: string): RoutePath {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (clean === '/about') return { page: 'about' };
  if (clean === '/projects') return { page: 'projects' };
  if (clean === '/contact') return { page: 'contact' };
  if (clean === '/blog') return { page: 'blog' };
  if (clean.startsWith('/blog/')) {
    const slug = clean.slice('/blog/'.length);
    return slug ? { page: 'blog', slug } : { page: 'blog' };
  }
  return { page: 'home' };
}

function serializeRoute(route: RoutePath): string {
  if (route.page === 'home') return '/';
  if (route.page === 'blog' && route.slug) return `/blog/${route.slug}`;
  return `/${route.page}`;
}

export default function App() {
  const [route, setRoute] = useState<RoutePath>(() => parsePath(window.location.pathname));
  const [showIntro, setShowIntro] = useState(true);

  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('naoupal-lang');
      if (saved === 'id' || saved === 'en') return saved;
    } catch {
      // Ignore storage errors
    }
    return 'en';
  });

  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('naoupal-theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
      // Ignore storage errors
    }
    return 'dark';
  });

  const { user, repos, loading, isLive, lastSyncedAt, refresh } = useGitHubData();

  useSeo(route, lang);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('naoupal-theme', theme);
    } catch {
      // Ignore storage errors
    }
  }, [theme]);

  const handleLanguageChange = useCallback((nextLang: Language) => {
    setLang(nextLang);
    try {
      localStorage.setItem('naoupal-lang', nextLang);
    } catch {
      // Ignore storage errors
    }
  }, []);

  const handleThemeToggle = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const handleNavigate = useCallback((nextRoute: RoutePath) => {
    const url = serializeRoute(nextRoute);
    if (window.location.pathname !== url) {
      window.history.pushState({}, '', url);
    }
    setRoute(nextRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const onPopState = () => {
      setRoute(parsePath(window.location.pathname));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const t = translations[lang];
  const routeKey = route.page === 'blog' && route.slug ? `blog-${route.slug}` : route.page;

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative flex min-h-screen flex-col bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-[#020617] dark:text-slate-100">
        <AnimatePresence>
          {showIntro && (
            <IntroLogoPreloader onComplete={() => setShowIntro(false)} />
          )}
        </AnimatePresence>

        <AnimatedBackground theme={theme} />
        <ScrollProgressBar />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          {t.skipToContent}
        </a>

        <Navbar
          route={route}
          onNavigate={handleNavigate}
          lang={lang}
          onLanguageChange={handleLanguageChange}
          theme={theme}
          onThemeToggle={handleThemeToggle}
        />

        <main id="main-content" className="relative z-10 flex-1">
          <PageUtilityBar
            lang={lang}
            onLanguageChange={handleLanguageChange}
            theme={theme}
            onThemeToggle={handleThemeToggle}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={routeKey}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            >
              {route.page === 'home' && (
                <HomePage
                  lang={lang}
                  user={user}
                  repos={repos}
                  loading={loading}
                  isLive={isLive}
                  lastSyncedAt={lastSyncedAt}
                  onRefresh={refresh}
                  onNavigate={handleNavigate}
                />
              )}
              {route.page === 'about' && (
                <AboutPage lang={lang} user={user} onNavigate={handleNavigate} />
              )}
              {route.page === 'projects' && (
                <ProjectsPage
                  lang={lang}
                  repos={repos}
                  loading={loading}
                  isLive={isLive}
                  lastSyncedAt={lastSyncedAt}
                  onRefresh={refresh}
                />
              )}
              {route.page === 'blog' && (
                <BlogPage
                  lang={lang}
                  slug={route.slug}
                  onNavigate={handleNavigate}
                />
              )}
              {route.page === 'contact' && <ContactPage lang={lang} />}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer
          lang={lang}
          onLanguageChange={handleLanguageChange}
          theme={theme}
          onThemeToggle={handleThemeToggle}
          onNavigate={handleNavigate}
        />
      </div>
    </MotionConfig>
  );
}
