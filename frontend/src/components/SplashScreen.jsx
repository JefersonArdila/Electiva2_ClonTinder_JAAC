import React, { useEffect, useState } from 'react';
import HomeInitial from './HomeInitial';
import Login from './Login';
import Register from './Register';
import '../styles/SplashScreen.css';

export default function SplashScreen({ onLoginSuccess, onSetScreen }) {
  const [loadingFinished, setLoadingFinished] = useState(false);
  const [screen, setScreen] = useState('splash'); // splash, home, login, register

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingFinished(true);
      setScreen('home');
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoginClick = () => setScreen('login');
  const handleRegisterClick = () => setScreen('register');
  const handleBack = () => setScreen('home');

  
  const handleLoginSuccessInternal = (user) => {
    if (onLoginSuccess) {
      onLoginSuccess(user);
    }
    if (onSetScreen) {
      onSetScreen('dashboard');
    }
  };

  if (!loadingFinished) {
    return (
      <div className="body">
        <div className="background-pattern"></div>

        <div className="splash-container">
          <div className="logo-container">
            <div className="logo">
              <div className="fire-icon">🔥</div>
            </div>
          </div>

          <h1 className="app-name">Clon Tinder.</h1>
          <p className="tagline">Encuentra tu match perfecto</p>

          <div className="loading-container">
            <div className="loading-bar">
              <div className="loading-progress"></div>
            </div>
            <div className="loading-text" id="loadingText">
              Preparando tu experiencia...
            </div>
          </div>
        </div>

        <div className="hearts-animation" id="heartsContainer"></div>

        <div className="features-preview">
          <div className="feature-item">
            <div className="feature-icon">👤</div>
            <span>Perfiles reales</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💬</div>
            <span>Chat instantáneo</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">❤️</div>
            <span>Matches perfectos</span>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'home') {
    return <HomeInitial onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />;
  }

  if (screen === 'login') {
    return <Login onBack={handleBack} onLoginSuccess={handleLoginSuccessInternal} />;
  }

  if (screen === 'register') {
    return <Register onBack={handleBack} />;
  }

  return null;
}
