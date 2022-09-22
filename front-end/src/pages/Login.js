import React, { useState } from 'react';
import { requestLogin } from '../services/requestUser';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  console.log(isLogged);

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
      const data = await requestLogin('/login', { email, password });
      console.log('data', data);

      // setToken(token);

      // const { role } = await requestData('/login/validate', { email, password });

      // localStorage.setItem('token', token);
      // localStorage.setItem('role', role);

      setIsLogged(true);
    } catch (error) {
      setFailedTryLogin(true);
      setIsLogged(false);
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
