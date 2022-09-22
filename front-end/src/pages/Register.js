import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestLogin } from '../services/requestUser';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);
  const [failedTryRegister, setFailedTryRegister] = useState(false);
  const navigate = useNavigate();

  console.log(isRegistered);

  const handleLoginValidation = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const minLengthPassword = 5;
    const minLengthName = 12;
    const validEmail = emailRegex.test(email);
    if (
      validEmail
      && password.length >= minLengthPassword
      && username.length >= minLengthName
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  function handleChange({ target: { name, value } }) {
    const register = {
      username: () => setUsername(value),
      email: () => setEmail(value),
      password: () => setPassword(value),
    };
    register[name]();
    handleLoginValidation();
  }

  const register = async (event) => {
    event.preventDefault();
    try {
      await requestLogin('/register', { username, email, password });

      setIsRegistered(true);
      navigate('/customer/products');
    } catch (error) {
      setFailedTryRegister(true);
      setIsRegistered(false);
    }
  };

  return (
    <main className="main-register">
      <form className="form-register">
        <input
          type="text"
          placeholder="Seu nome"
          data-testid="common_register__input-name"
          value={ username }
          onChange={ handleChange }
          name="username"
        />
        <input
          type="email"
          placeholder="email@email.com"
          data-testid="common_register__input-email"
          value={ email }
          onChange={ handleChange }
          name="email"
        />
        <input
          type="password"
          placeholder="******"
          data-testid="common_register__input-password"
          onChange={ handleChange }
          name="password"
        />
        <button
          data-testid="common_register__button-register"
          type="submit"
          disabled={ buttonDisabled }
          onClick={ (event) => register(event) }
        >
          Cadastrar
        </button>
      </form>
      { failedTryRegister && (
        <span data-testid="common_register__element-invalid_register">
          Dados inexistentes
        </span>)}
    </main>
  );
}

export default Register;
