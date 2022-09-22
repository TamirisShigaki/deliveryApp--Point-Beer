import React from 'react';

function Header() {
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
            FULANO
          </li>
          <li data-testid="customer_products__element-navbar-link-logout">
            SAIR
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
