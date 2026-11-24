import React from 'react';
import { Globe, Moon, Sun } from 'lucide-react';
import { translations } from '../data/translations';
import { Language, Theme } from '../types/portfolio';

interface PageUtilityBarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  theme: Theme;
  onThemeToggle: () => void;
  contextLabel?: string;
}

export const PageUtilityBar: React.FC<PageUtilityBarProps> = ({
  lang,
  onLanguageChange,
  theme,
  onThemeToggle,
  contextLabel,
}) => {
  const t = translations[lang];

  return (
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 pt-5 sm:px-6 lg:px-8">
      <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
        {contextLabel ?? 'Naoupal · Sleman, Yogyakarta'}
      </div>

      <div className="flex items-center gap-2.5">
        <div
          className="inline-flex items-center gap-0.5 rounded-lg border border-slate-200 bg-white p-0.5 dark:border-slate-800 dark:bg-slate-900"
          role="group"
          aria-label={t.utility.languageLabel}
        >
          <Globe className="ml-2 mr-1 h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
          <button
            type="button"
            onClick={() => onLanguageChange('en')}
            aria-pressed={lang === 'en'}
            className={`rounded-md px-2.5 py-1 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 ${
              lang === 'en'
                ? 'bg-slate-900 text-white dark:bg-blue-600 dark:text-white'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => onLanguageChange('id')}
            aria-pressed={lang === 'id'}
            className={`rounded-md px-2.5 py-1 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 ${
              lang === 'id'
                ? 'bg-slate-900 text-white dark:bg-blue-600 dark:text-white'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
            }`}
          >
            ID
          </button>
        </div>

        <button
          type="button"
          onClick={onThemeToggle}
          aria-label={theme === 'dark' ? t.utility.light : t.utility.dark}
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          {theme === 'dark' ? (
            <>
              <Sun className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
              <span>{t.utility.light}</span>
            </>
          ) : (
            <>
              <Moon className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
              <span>{t.utility.dark}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
