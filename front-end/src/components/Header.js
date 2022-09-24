import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const user = localStorage.getItem('user');
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
    localStorage.clear();
  };

  return (
    <header>
      <nav>
        <ul>
          <li data-testid="customer_products__element-navbar-link-products">
            PRODUTOS
          </li>
          <li data-testid="customer_products__element-navbar-link-orders">
            MEUS PEDIDOS
          </li>
          <li data-testid="customer_products__element-navbar-user-full-name">
            {JSON.parse(user).name}
          </li>
          <li>
            <button
              data-testid="customer_products__element-navbar-link-logout"
              type="button"
              onClick={ handleClick }
            >
              Sair
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
