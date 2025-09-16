import React, { useState } from 'react';
import './AuthForm.css';

export default function RegisterForm({ onBack }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: 'HOMBRE',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (response.ok) {
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      // Si tienes navegación, puedes redirigir al login
      // por ejemplo: navigate('/login') si usas react-router
    } else {
      alert(data.message || 'Error al registrar usuario');
    }
  } catch (error) {
    console.error('Error en el registro:', error);
    alert('Error de conexión con el servidor');
  }
};


  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Crear cuenta</h2>

        <input
          type="text"
          name="firstName"
          placeholder="Nombre"
          value={form.firstName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="lastName"
          placeholder="Apellido"
          value={form.lastName}
          onChange={handleChange}
          required
        />

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

        <select name="gender" value={form.gender} onChange={handleChange}>
          <option value="HOMBRE">Hombre</option>
          <option value="MUJER">Mujer</option>
          <option value="OTRO">Otro</option>
        </select>

        <button type="submit" className="btn-pink">Registrarse</button>
        <button type="button" onClick={onBack} className="btn-link">Volver</button>
      </form>
    </div>
  );
}
