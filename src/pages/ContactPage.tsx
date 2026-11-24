import React from 'react';
import { motion } from 'motion/react';
import { ContactWizard } from '../components/ContactWizard';
import { Language } from '../types/portfolio';

interface ContactPageProps {
  lang: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pt-12"
    >
      <ContactWizard lang={lang} />
    </motion.div>
  );
};
