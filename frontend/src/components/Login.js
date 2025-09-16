import React, { useState } from 'react';
import api from '../api/axiosConfig';
import './AuthForm.css';

export default function Login({ onBack, onLoginSuccess }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await api.post('/login', form);
      const { token, user } = response.data;

      // Guardar token y usuario localmente
      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(user));

      // Notificar éxito al componente padre
      if (onLoginSuccess) onLoginSuccess(user);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'Error al iniciar sesión');
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>
        {error && <p className="error">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn-pink">Entrar</button>
        <button type="button" onClick={onBack} className="btn-link">Volver</button>
      </form>
    </div>
  );
}
