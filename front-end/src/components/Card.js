import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card({ price, img, title, qtd, index }) {
  return (
    <div>
      <p data-testid={ `customer_products__element-card-price-${index}` }>
        {price}
      </p>
      <div>
        <img
          src={ img }
          alt={ title }
          data-testid={ `customer_products__img-card-bg-image-${index}` }
        />
      </div>
      <p data-testid={ `customer_products__element-card-title-${index}` }>{title}</p>
      <div data-testid={ `customer_products__input-card-quantity-${index}` }>
        <button type="button">-</button>
        <span>{qtd}</span>
        <button type="button">+</button>
      </div>
    </div>
  );
}

Card.propTypes = {
  price: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  qtd: PropTypes.number,
}.isRequired;

export default Card;
