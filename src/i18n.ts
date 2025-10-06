import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationID from './locales/id/translation.json';
const resources = {
  en: {
    translation: translationEN,
  },
  id: {
    translation: translationID,
  },
};
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'id', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
export default i18n;