import React, { useState } from 'react';
import { sendData } from '../services/requestUser';

function RegisterUser() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('customer');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);
  const [failedTryRegister, setFailedTryRegister] = useState(false);

  console.log(isRegistered);

  const handleLoginValidation = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const minLengthPassword = 6;
    const minLengthName = 12;
    const validEmail = emailRegex.test(email);
    if (
      validEmail
      && password.length >= minLengthPassword
      && username.length >= minLengthName
    ) {
      setButtonDisabled(false);
      console.log(buttonDisabled);
    } else {
      setButtonDisabled(true);
    }
  };

  function handleChange({ target: { name, value } }) {
    const register = {
      username: () => setUsername(value),
      email: () => setEmail(value),
      password: () => setPassword(value),
      type: () => setType(value),
    };
    register[name]();
    handleLoginValidation();
  }

  const register = async (event) => {
    event.preventDefault();
    try {
      console.log(username, email, password, type);
      await sendData('/users/register', { username, email, password, role: type });
      setFailedTryRegister(false);
      setIsRegistered(true);
    } catch (error) {
      setFailedTryRegister(true);
    }
  };

  return (
    <main className="main-register">
      { failedTryRegister && (
        <span data-testid="admin_manage__element-invalid-register">
          Dados inexistentes
        </span>)}
      <form className="form-register">
        <label htmlFor="username">
          Nome:
          <input
            type="text"
            id="username"
            placeholder="Nome e sobrenome"
            data-testid="admin_manage__input-name"
            value={ username }
            onChange={ handleChange }
            name="username"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            placeholder="email@email.com"
            data-testid="admin_manage__input-email"
            value={ email }
            onChange={ handleChange }
            name="email"
          />
        </label>
        <label htmlFor="senha">
          Senha
          <input
            id="senha"
            type="password"
            placeholder="******"
            data-testid="admin_manage__input-password"
            onChange={ handleChange }
            name="password"
          />
        </label>
        <select
          id="tipo"
          type="select"
          data-testid="admin_manage__select-role"
          onChange={ handleChange }
          name="type"
        >
          Tipo
          <option
            value="customer"
          >
            Cliente
          </option>
          <option
            value="seller"
          >
            Vendedor(a)
          </option>
          <option
            value="administrator"
          >
            Administrador
          </option>
        </select>
        <button
          data-testid="admin_manage__button-register"
          type="submit"
          disabled={ buttonDisabled }
          onClick={ (event) => register(event) }
        >
          Cadastrar
        </button>
      </form>
    </main>
  );
}

export default RegisterUser;
