import React, { useState } from 'react';
import LoginForm from './auth/components/LoginForm';
import RegisterForm from './auth/components/RegisterForm.jsx';

function App() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {showRegister ? (
        <RegisterForm onRegisterSuccess={() => setShowRegister(false)} />
      ) : (
        // Este fragmento agrupa el LoginForm y el botón en un solo bloque visual
        <div>
          <LoginForm />
          {/* Espacio entre el formulario y el botón */}
          <div style={{ marginTop: 12, textAlign: 'center' }}>
            <button onClick={() => setShowRegister(true)}>
              Registrarse ahora
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
