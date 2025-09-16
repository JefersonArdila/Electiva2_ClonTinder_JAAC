import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLanguage = localStorage.getItem('language') || 'es';

const resources = {
  es: {
    translation: {
      swipeRight: "Desliza a la derecha",
      createAccount: "Crear cuenta",
      login: "Iniciar sesión",
      language: "Idioma",
      products: "Productos",
      moreInfo: "Más información",
      security: "Seguridad",
      support: "Asistencia",
      download: "Descarga"
    }
  },
  en: {
    translation: {
      swipeRight: "Swipe Right",
      createAccount: "Create Account",
      login: "Login",
      language: "Language",
      products: "Products",
      moreInfo: "More Information",
      security: "Security",
      support: "Support",
      download: "Download"
    }
  },
  fr: {
    translation: {
      swipeRight: "Faites glisser vers la droite",
      createAccount: "Créer un compte",
      login: "Connexion",
      language: "Langue",
      products: "Produits",
      moreInfo: "Plus d'informations",
      security: "Sécurité",
      support: "Assistance",
      download: "Télécharger"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage, 
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
