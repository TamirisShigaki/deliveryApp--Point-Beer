import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card({ price, img, title, qtd, id }) {
  return (
    <div>
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        {price.replace(/\./, ',')}
      </p>
      <div>
        <img
          src={ img }
          alt={ title }
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
      </div>
      <p data-testid={ `customer_products__element-card-title-${id}` }>{title}</p>
      <div data-testid={ `customer_products__input-card-quantity-${id}` }>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item--${id}` }
        >
          -
        </button>
        <input
          type="number"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          // onChange={ handleChange }
          name="qtd"
          value={ qtd }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          +
        </button>
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
