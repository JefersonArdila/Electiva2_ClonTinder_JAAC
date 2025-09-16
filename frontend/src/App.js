import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Dashboard from './components/Dashboard';

function App() {
  const [screen, setScreen] = useState('splash');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setScreen('dashboard');
    }
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setScreen('dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setUser(null);
    setScreen('splash');
  };

  return (
    <>
      {screen === 'dashboard' && user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <SplashScreen
          onLoginSuccess={handleLoginSuccess}
          onSetScreen={setScreen}
        />
      )}
    </>
  );
}

export default App;
