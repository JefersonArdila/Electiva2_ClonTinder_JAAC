import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import SwipeDeck from './SwipeDeck';
import ChatRoom from './ChatRoom';  
import './Dashboard.css';

export default function Dashboard({ user, onLogout }) {
  const [matches, setMatches] = useState([]);
  const [token, setToken] = useState(null);
  const [activeTab, setActiveTab] = useState('swipe');
  const [loading, setLoading] = useState(true);
  const [activeMatch, setActiveMatch] = useState(null);  

  const API_URL = 'http://localhost:3000/api';

  const handleLogout = useCallback(() => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    onLogout();
  }, [onLogout]);

  const fetchMatches = useCallback(async (authToken) => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/matches`, {
        headers: { Authorization: `Bearer ${authToken}` }
      });
      setMatches(response.data.matches);
    } catch (error) {
      console.error('Error al obtener matches:', error);
      if (error.response?.status === 401) {
        alert('Sesión expirada. Por favor, inicia sesión nuevamente.');
        handleLogout();
      }
    } finally {
      setLoading(false);
    }
  }, [handleLogout]);

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (!storedToken) {
      alert('No autenticado. Por favor, inicia sesión.');
      handleLogout();
      return;
    }
    setToken(storedToken);
    fetchMatches(storedToken);
  }, [fetchMatches, handleLogout]);

  if (!token) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Cargando...</p>
      </div>
    );
  }

  if (activeMatch) {
    return (
      <div className="dashboard">
        <header className="dashboard-header">
          <div className="header-content">
            <button
              onClick={() => setActiveMatch(null)}
              className="back-to-matches-btn"
            >
              🔙 Volver a Matches
            </button>
            <button
              onClick={handleLogout}
              className="logout-btn"
              title="Cerrar sesión"
            >
              🚪 Salir
            </button>
          </div>
        </header>

        <main className="dashboard-content">
          <ChatRoom
            token={token}
            matchId={activeMatch.match.id}
            currentUserId={user.id}
            matchedUser={activeMatch.matchedUser}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <div className="user-info">
            <div className="user-avatar-small">
              {user.email[0].toUpperCase()}
            </div>
            <div className="user-details">
              <h2>¡Hola, {user.email.split('@')[0]}!</h2>
              <p className="user-role">ID: {user.id} | {user.role}</p>
            </div>
          </div>
          
          <button 
            onClick={handleLogout} 
            className="logout-btn"
            title="Cerrar sesión"
          >
            🚪 Salir
          </button>
        </div>
      </header>

      <nav className="dashboard-nav">
        <button 
          className={`nav-btn ${activeTab === 'swipe' ? 'active' : ''}`}
          onClick={() => setActiveTab('swipe')}
        >
          💖 Descubrir
        </button>
        <button 
          className={`nav-btn ${activeTab === 'matches' ? 'active' : ''}`}
          onClick={() => setActiveTab('matches')}
        >
          🎯 Matches ({matches.length})
        </button>
      </nav>

      <main className="dashboard-content">
        {activeTab === 'swipe' && (
          <div className="swipe-section">
            <SwipeDeck token={token} />
          </div>
        )}

        {activeTab === 'matches' && (
          <div className="matches-section">
            <div className="matches-header">
              <h2>Tus Matches</h2>
              <button 
                onClick={() => fetchMatches(token)}
                className="refresh-btn"
                disabled={loading}
              >
                {loading ? '🔄' : '↻'} Actualizar
              </button>
            </div>

            {loading ? (
              <div className="loading-matches">
                <div className="loading-spinner"></div>
                <p>Cargando matches...</p>
              </div>
            ) : matches.length === 0 ? (
              <div className="no-matches">
                <div className="no-matches-card">
                  <h3>💔 Aún no tienes matches</h3>
                  <p>¡Sigue haciendo swipe para encontrar tu pareja perfecta!</p>
                  <button 
                    onClick={() => setActiveTab('swipe')}
                    className="start-swiping-btn"
                  >
                    🔍 Empezar a buscar
                  </button>
                </div>
              </div>
            ) : (
              <div className="matches-grid">
                {matches.map((match) => {
                  const matchedUser = match.userA.id === user.id ? match.userB : match.userA;
                  return (
                    <div key={match.id} className="match-card">
                      <div className="match-avatar">
                        {matchedUser.firstName[0]}{matchedUser.lastName[0]}
                      </div>
                      <div className="match-info">
                        <h3>{matchedUser.firstName} {matchedUser.lastName}</h3>
                        <p className="match-email">{matchedUser.email}</p>
                        <div className="match-date">
                          Match creado: {new Date(match.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="match-actions">
                        <button
                          className="chat-btn"
                          onClick={() => setActiveMatch({ match, matchedUser })}
                        >
                          💬 Chat
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
