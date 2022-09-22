import React from 'react';

function Header() {
  const user = localStorage.getItem('user');

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
          <li data-testid="customer_products__element-navbar-link-logout">
            <button
              type="button"
              onClick={ localStorage.clear }
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
