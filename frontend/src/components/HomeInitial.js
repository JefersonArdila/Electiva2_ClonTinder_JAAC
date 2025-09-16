import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function HomeInitial({ onLoginClick, onRegisterClick }) {
  const { t, i18n } = useTranslation();
  const [showLanguages, setShowLanguages] = useState(false);

  const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  localStorage.setItem('language', lng); //Esto guarda el idioma
  setShowLanguages(false);
};

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <nav style={styles.navbar}>
          <div style={styles.logo}>🔥 tinder</div>
          <div style={styles.links}>
            <a href="https://tinder.com/es/feature/swipe/" style={styles.link}>{t('products')}</a>
            <a href="#" style={styles.link}>{t('moreInfo')}</a>
            <a href="#" style={styles.link}>{t('security')}</a>
            <a href="#" style={styles.link}>{t('support')}</a>
            <a href="#" style={styles.link}>{t('download')}</a>
          </div>
          <div style={styles.rightSection}>
            <div style={{ position: 'relative' }}>
              <button
                style={styles.language}
                onClick={() => setShowLanguages(!showLanguages)}
              >
                🌐 {t('language')}
              </button>
              {showLanguages && (
                <div style={styles.dropdown}>
                  <button onClick={() => changeLanguage('es')}>Español</button>
                  <button onClick={() => changeLanguage('en')}>English</button>
                  <button onClick={() => changeLanguage('fr')}>Français</button>
                </div>
              )}
            </div>
            <button onClick={onLoginClick} style={styles.login}>{t('login')}</button>
          </div>
        </nav>

        <div style={styles.centerContent}>
          <h1 style={styles.title}>{t('swipeRight')}</h1>
          <button onClick={onRegisterClick} style={styles.createAccount}>{t('createAccount')}</button>
        </div>
      </div>
    </div>
  );
}


const backgroundImage = "url(/img/img1.jpg)";
 

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    backgroundImage: backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  links: {
    display: 'flex',
    gap: 20,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: 16,
  },
  rightSection: {
    display: 'flex',
    gap: 10,
  },
  language: {
    background: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: 16,
    cursor: 'pointer',
  },
  login: {
    background: 'white',
    color: 'black',
    borderRadius: 20,
    border: 'none',
    padding: '10px 20px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  centerContent: {
    textAlign: 'center',
    marginBottom: '20%',
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  createAccount: {
    backgroundColor: '#fd5068',
    color: 'white',
    border: 'none',
    padding: '15px 30px',
    borderRadius: 25,
    fontSize: 18,
    fontWeight: 'bold',
    cursor: 'pointer',
  },

  dropdown: {
  position: 'absolute',
  top: '40px',
  right: 0,
  backgroundColor: '#fff',
  color: '#000',
  borderRadius: 8,
  boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden'
}

};
