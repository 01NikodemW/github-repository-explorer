import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {},
  },
  pl: {
    translation: {
      Search: "Szukaj",
      "Enter username": "Wprowadź nazwę użytkownika",
      "No repositories": "Brak repozytoriów",
      "No users found for": "Nie znaleziono użytkowników dla",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pl",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

i18n.language = "pl";

export default i18n;
