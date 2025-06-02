// src/auth/components/LoginForm.jsx

import React, { useState } from 'react';

// Componente funcional para el formulario de inicio de sesión
function LoginForm() {
  // Estados para guardar los datos que el usuario escribe
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false); // checkbox "Recordar mi información"
  const [error, setError] = useState('');

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el refresco de la página
    setError(''); // Limpia errores anteriores

    // Validaciones simples
    if (!email) {
      setError('Debes ingresar tu correo electrónico.');
      return;
    }
    if (!password) {
      setError('Debes ingresar tu contraseña.');
      return;
    }
    // Aquí se haría la autenticación (ejemplo ficticio)
    if (email === "usuario@ejemplo.com" && password === "123456") {
      alert('¡Inicio de sesión exitoso!');
      // Aquí podrías redirigir al usuario o guardar el token, etc.
    } else {
      setError('Correo o contraseña incorrectos.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Inicie sesión</h2>
      
      {/* Campo de email */}
      <label style={styles.label}>Dirección electrónica o número de socio</label>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="ej.: miltonjohao@hotmail.com"
        style={styles.input}
      />

      {/* Campo de contraseña */}
      <label style={styles.label}>Contraseña</label>
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={styles.input}
      />

      {/* Checkbox de recordar */}
      <div style={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={remember}
          onChange={() => setRemember(!remember)}
        />
        <span style={styles.checkboxLabel}>Recordar mi información</span>
      </div>

      {/* Mostrar error si existe */}
      {error && <div style={styles.error}>{error}</div>}

      {/* Botón de enviar */}
      <button type="submit" style={styles.button}>Inicie sesión</button>

      
      {/* Enlace para restablecer contraseña */}
      <div style={styles.linkContainer}>
        <a href="#">¿Necesita ayuda con la contraseña? Restablecer contraseña</a>
      </div>
    </form>
  );
}

// Pequeño objeto para estilos inline (para que veas cómo se pueden aplicar sin CSS aparte)
const styles = {
  form: {
    maxWidth: '350px',
    margin: 'auto',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 0 8px #eee',
    background: '#fff'
  },
  label: {
    display: 'block',
    marginTop: '1rem',
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '0.2rem',
    marginBottom: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem'
  },
  checkboxLabel: {
    marginLeft: '0.5rem'
  },
  button: {
    width: '100%',
    padding: '10px',
    background: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  error: {
    color: 'red',
    marginBottom: '1rem'
  },
  linkContainer: {
    marginTop: '1rem',
    textAlign: 'right'
  }
};

export default LoginForm;
