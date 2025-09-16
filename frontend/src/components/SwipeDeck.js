import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import axios from 'axios';
import './SwipeDeck.css'; // Importar estilos

export default function SwipeDeck({ token }) {
  const [users, setUsers] = useState([]);
  const [lastAction, setLastAction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const API_URL = 'http://localhost:3000/api';

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API_URL}/users/available`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUsers(res.data);
        setCurrentIndex(res.data.length - 1); 
      } catch (error) {
        console.error('Error cargando usuarios disponibles:', error);
        if (error.response?.status === 401) {
          alert('Sesión expirada. Por favor, inicia sesión nuevamente.');
        }
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchUsers();
  }, [token]);

  const handleSwipe = async (direction, user, index) => {
    const action = direction === 'right' ? 'LIKE' : direction === 'left' ? 'DISLIKE' : null;
    if (!action) return;

    try {
      const response = await axios.post(`${API_URL}/swipes`, {
        targetUserId: user.id,
        action
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      // Mostrar mensaje especial si es un match
      if (response.data.message.includes('match')) {
        setLastAction(`🎉 ¡ES UN MATCH! con ${user.firstName}`);
      } else {
        setLastAction(`${action === 'LIKE' ? '❤️' : '💔'} ${action} a ${user.firstName}`);
      }

      
      setCurrentIndex(prev => prev - 1);
      
    } catch (error) {
      console.error('Error enviando swipe:', error);
      setLastAction('Error al procesar swipe');
    }
  };

  const handleCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen');
  };

  

  
  const handleManualSwipe = (action) => {
    if (currentIndex >= 0 && users[currentIndex]) {
      const user = users[currentIndex];
      handleSwipe(action === 'LIKE' ? 'right' : 'left', user, currentIndex);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando usuarios...</p>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="no-users-container">
        <div className="no-users-card">
          <h3>🎯 ¡No hay más usuarios!</h3>
          <p>Has visto todos los perfiles disponibles.</p>
          <p>Vuelve más tarde para ver nuevos usuarios.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="swipe-container">
      {lastAction && (
        <div className={`action-feedback ${lastAction.includes('MATCH') ? 'match' : ''}`}>
          {lastAction}
        </div>
      )}

      <div className="card-container">
        {users.map((user, index) => (
          <TinderCard
            key={user.id}
            onSwipe={(dir) => handleSwipe(dir, user, index)}
            onCardLeftScreen={() => handleCardLeftScreen(user.firstName)}
            preventSwipe={['up', 'down']}
            className="swipe-card"
          >
            <div className="user-card">
              <div className="user-avatar">
                {user.firstName[0]}{user.lastName[0]}
              </div>
              
              <div className="user-info">
                <h2 className="user-name">
                  {user.firstName} {user.lastName}
                </h2>
                
                <div className="user-details">
                  <p className="user-email">{user.email}</p>
                  <span className="user-gender">
                    {user.gender === 'M' ? '👨' : user.gender === 'F' ? '👩' : '👤'} 
                    {user.gender}
                  </span>
                </div>
              </div>

              <div className="card-overlay">
                <div className="overlay-like">LIKE</div>
                <div className="overlay-nope">NOPE</div>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>

      <div className="action-buttons">
        <button 
          className="action-btn dislike-btn"
          onClick={() => handleManualSwipe('DISLIKE')}
          disabled={currentIndex < 0}
        >
          💔
        </button>
        
        <button 
          className="action-btn like-btn"
          onClick={() => handleManualSwipe('LIKE')}
          disabled={currentIndex < 0}
        >
          ❤️
        </button>
      </div>

      <div className="cards-remaining">
        {currentIndex + 1} usuarios restantes
      </div>
    </div>
  );
}