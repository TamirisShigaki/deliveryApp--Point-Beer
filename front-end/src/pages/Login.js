import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleLoginValidation = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const minLengthPassword = 6;
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
    </main>
  );
}

export default Login;
