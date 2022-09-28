import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, Link } from 'react-router-dom';

function Header({ seller }) {
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
          {!seller && (
            <Link to="/customer/orders">
              <li data-testid="customer_products__element-navbar-link-orders">
                MEUS PEDIDOS
              </li>
            </Link>
          )}
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

Header.propTypes = {
  seller: PropTypes.boolean,
}.isRequired;

export default Header;
