import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommonTranslations from "../../public/locales/en/translation.json";
import roCommonTranslations from "../../public/locales/ro/translation.json";
i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: "en",
    resources: {
        en: {common: enCommonTranslations},
        ro: {common: roCommonTranslations}
    },
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });

export default i18n;