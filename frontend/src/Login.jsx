import React, { useState } from 'react';
import './styles/Login.css';
import { login } from './services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await login(email, senha);

      if (response.status === 200) {
        // Sucesso na autenticação
        console.log('Autenticação bem-sucedida:', response.data);
        // Redirecionar o usuário ou armazenar o token de autenticação
      } else {
        // Falha na autenticação
        setError('Erro ao fazer login');
      }
    } catch (error) {
      setError('Erro ao fazer login. Por favor, tente novamente mais tarde.');
      console.error('Erro na solicitação de autenticação:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="Login">
      <header className="Login-header">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Carregando...' : 'Login'}
          </button>
        </form>
      </header>
    </div>
  );
}

export default Login;
