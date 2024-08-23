import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim() !== '') {
      localStorage.setItem('username', username);
      onLogin(username);
    } else {
      alert('Por favor, ingresa un nombre de usuario válido.');
    }
  };

  return (
<div className="container">
  <div className="row justify-content-center align-items-center">
    <div className="col-md-6">
      <div className="card shadow-lg">
        <div className="card-body p-5">
          <h2 className="card-title text-center mb-4">Bienvenido al Juego</h2>
          <p className="text-muted text-center mb-4">Introduce tu nombre para comenzar</p>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="floatingInput">Nombre de usuario</label>
          </div>
          <button 
            className="btn btn-danger w-100 py-2"
            onClick={handleLogin}
          >
            Iniciar Juego
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default Login;
