import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
  fr: {
    translation: fr,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

// Language detection
export const detectLanguage = () => {
  const browserLang = navigator.language.split('-')[0];
  return Object.keys(resources).includes(browserLang) ? browserLang : 'en';
};

// Language switcher
export const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
};

// Translation hook
export const useTranslation = () => {
  const { t, i18n } = useTranslation();
  return { t, i18n };
};

// Pluralization helper
export const pluralize = (key: string, count: number) => {
  return i18n.t(key, { count });
};

// Date formatting
export const formatDate = (date: Date, options: Intl.DateTimeFormatOptions = {}) => {
  return new Intl.DateTimeFormat(i18n.language, options).format(date);
};

// Number formatting
export const formatNumber = (number: number, options: Intl.NumberFormatOptions = {}) => {
  return new Intl.NumberFormat(i18n.language, options).format(number);
};

// Currency formatting
export const formatCurrency = (amount: number, currency: string, options: Intl.NumberFormatOptions = {}) => {
  return new Intl.NumberFormat(i18n.language, {
    style: 'currency',
    currency,
    ...options,
  }).format(amount);
}; 