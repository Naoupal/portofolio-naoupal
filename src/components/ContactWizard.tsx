import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2, Mail, MapPin, Send } from 'lucide-react';
import { translations } from '../data/translations';
import { Language } from '../types/portfolio';

interface ContactWizardProps {
  lang: Language;
}

export const ContactWizard: React.FC<ContactWizardProps> = ({ lang }) => {
  const t = translations[lang].contact;
  const [step, setStep] = useState<1 | 2>(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [priority, setPriority] = useState(t.priorities[1].id);
  const [scope, setScope] = useState(t.scopes[1].id);
  const [message, setMessage] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!name.trim() || !emailValid) {
      setErrorMsg(t.validationNameEmail);
      return;
    }
    setErrorMsg(null);
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAccepted) {
      setErrorMsg(t.validationPrivacy);
      return;
    }
    setErrorMsg(null);
    setSubmitted(true);
  };

  const mailtoHref = `mailto:naufalatmaja.f@gmail.com?subject=${encodeURIComponent(
    `[Portfolio Inquiry - ${scope}] from ${name}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nTimeline: ${priority}\nTopic: ${scope}\n\n${message}`
  )}`;

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    setName('');
    setEmail('');
    setMessage('');
    setPrivacyAccepted(false);
    setErrorMsg(null);
  };

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
      {/* Left Column: Direct Info */}
      <div className="lg:col-span-5">
        <p className="text-xs font-semibold tracking-wide text-blue-600 dark:text-blue-400">
          {t.kicker}
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl [text-wrap:balance]">
          {t.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
          {t.subtitle}
        </p>

        <div className="mt-8 space-y-4 border-t border-slate-200 pt-6 dark:border-slate-800">
          <div>
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {t.directTitle}
            </div>
            <a
              href="mailto:naufalatmaja.f@gmail.com"
              className="mt-1 inline-flex items-center gap-2 font-display text-base font-semibold text-slate-900 transition-colors hover:text-blue-600 dark:text-slate-100 dark:hover:text-blue-400"
            >
              <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
              <span>naufalatmaja.f@gmail.com</span>
            </a>
          </div>

          <div>
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {t.locationLabel}
            </div>
            <div className="mt-1 inline-flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
              <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
              <span>{t.timezoneValue}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Interactive 2-Step Inquiry Wizard */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-7 dark:border-slate-800 dark:bg-[#0B1120]">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-4"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
              <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-display text-xl font-bold text-slate-900 dark:text-white">
              {t.successTitle}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {t.successBody}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={mailtoHref}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>{t.openMailClient}</span>
              </a>
              <button
                type="button"
                onClick={resetForm}
                className="inline-flex items-center rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                {t.sendAnother}
              </button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
              <span className="font-mono text-xs font-medium text-slate-500 dark:text-slate-400">
                {t.stepLabel} {step} {t.stepOf} 2
              </span>
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-1.5 w-8 rounded-full bg-blue-600" />
                <span
                  className={`h-1.5 w-8 rounded-full transition-colors ${
                    step === 2 ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-800'
                  }`}
                />
              </div>
            </div>

            {errorMsg && (
              <div
                role="alert"
                className="mb-5 rounded-lg border border-rose-300 bg-rose-50 px-4 py-3 text-sm text-rose-800 dark:border-rose-800/60 dark:bg-rose-950/40 dark:text-rose-200"
              >
                {errorMsg}
              </div>
            )}

            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-5"
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-slate-800 dark:text-slate-200"
                    >
                      {t.nameLabel}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.namePlaceholder}
                      className="mt-1.5 h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-slate-800 dark:text-slate-200"
                    >
                      {t.emailLabel}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.emailPlaceholder}
                      className="mt-1.5 h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <span className="block text-sm font-medium text-slate-800 dark:text-slate-200">
                      {t.priorityLabel}
                    </span>
                    <div className="mt-2 grid gap-2 sm:grid-cols-3">
                      {t.priorities.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setPriority(item.id)}
                          aria-pressed={priority === item.id}
                          className={`min-h-10 rounded-lg border px-3 py-2 text-xs font-semibold transition-colors ${
                            priority === item.id
                              ? 'border-blue-600 bg-blue-600 text-white'
                              : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-slate-700'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                    >
                      <span>{t.nextButton}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-5"
                >
                  <div>
                    <span className="block text-sm font-medium text-slate-800 dark:text-slate-200">
                      {t.scopeLabel}
                    </span>
                    <div className="mt-2 grid gap-2 sm:grid-cols-2">
                      {t.scopes.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setScope(item.id)}
                          aria-pressed={scope === item.id}
                          className={`min-h-10 rounded-lg border px-3.5 py-2 text-left text-xs font-semibold transition-colors ${
                            scope === item.id
                              ? 'border-blue-600 bg-blue-600 text-white'
                              : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-slate-700'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-slate-800 dark:text-slate-200"
                    >
                      {t.messageLabel}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t.messagePlaceholder}
                      className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 p-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
                    />
                  </div>

                  <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    <input
                      type="checkbox"
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span>{t.privacyLabel}</span>
                  </label>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setErrorMsg(null);
                        setStep(1);
                      }}
                      className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                      <span>{t.backButton}</span>
                    </button>

                    <button
                      type="submit"
                      className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                    >
                      <Send className="h-4 w-4" aria-hidden="true" />
                      <span>{t.submitButton}</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        )}
      </div>
    </div>
  );
};
