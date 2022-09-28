import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendData, setToken } from '../services/requestUser';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [failedTryLogin, setFailedTryLogin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      if (user.role === 'customer') {
        navigate('/customer/products');
      }
      if (user.role === 'seller') {
        navigate('/seller');
      }
    }
  }, []);

  const handleLoginValidation = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const minLengthPassword = 5;
    const validEmail = emailRegex.test(email);
    if (validEmail && password.length >= minLengthPassword) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  function handleChange({ target: { name, value } }) {
    const login = {
      email: () => setEmail(value),
      password: () => setPassword(value),
    };
    login[name]();
    handleLoginValidation();
  }

  const login = async (event) => {
    event.preventDefault();
    try {
      const { token } = await sendData('/login', { email, password });
      setToken(token);
      const { name, role, id } = await sendData('/users', { email });
      const userData = {
        id,
        name,
        email,
        role,
        token,
      };
      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/customer/products');
    } catch (error) {
      console.log(error);
      setFailedTryLogin(true);
    }
  };

  return (
    <main className="main-login">
      <form className="form-login">
        <input
          type="email"
          placeholder="email@email.com"
          data-testid="common_login__input-email"
          value={ email }
          onChange={ handleChange }
          name="email"
        />
        <input
          type="password"
          placeholder="******"
          data-testid="common_login__input-password"
          onChange={ handleChange }
          name="password"
        />
        <button
          data-testid="common_login__button-login"
          type="submit"
          disabled={ buttonDisabled }
          onClick={ (event) => login(event) }
        >
          Login
        </button>
        <button
          data-testid="common_login__button-register"
          type="submit"
          onClick={ () => navigate('/register') }
        >
          Ainda não tenho conta
        </button>
      </form>
      { failedTryLogin && (
        <span data-testid="common_login__element-invalid-email">
          Dados inexistentes
        </span>)}
    </main>
  );
}

export default Login;
