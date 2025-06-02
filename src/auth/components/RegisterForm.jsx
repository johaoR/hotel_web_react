import React, { useState } from 'react';

function RegisterForm({ onRegisterSuccess }) {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    password: '',
    telefono: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validación simple
    if (!form.nombre || !form.email || !form.password) {
      setError('Completa todos los campos obligatorios.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/clientes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message || '¡Registro exitoso!');
        setForm({ nombre: '', email: '', password: '', telefono: '' });
        if (onRegisterSuccess) onRegisterSuccess();
      } else {
        setError(data.message || 'Error al registrar.');
      }
    } catch {
      setError('Error de red o servidor.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 350, margin: 'auto', padding: 20 }}>
      <h2>Registro de Cliente</h2>
      <input
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
        style={{ width: '100%', marginBottom: 8 }}
      />
      <input
        name="email"
        placeholder="Correo electrónico"
        type="email"
        value={form.email}
        onChange={handleChange}
        style={{ width: '100%', marginBottom: 8 }}
      />
      <input
        name="password"
        placeholder="Contraseña"
        type="password"
        value={form.password}
        onChange={handleChange}
        style={{ width: '100%', marginBottom: 8 }}
      />
      <input
        name="telefono"
        placeholder="Teléfono (opcional)"
        value={form.telefono}
        onChange={handleChange}
        style={{ width: '100%', marginBottom: 8 }}
      />
      {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
      {success && <div style={{ color: 'green', marginBottom: 8 }}>{success}</div>}
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default RegisterForm;
