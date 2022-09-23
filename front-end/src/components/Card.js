import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import appContext from '../context/appContext';

function Card({ price, img, title, id }) {
  const [qtd, setQtd] = useState(0);
  const { total, setTotal } = useContext(appContext);

  const changeQtd = async ({ target: { name } }) => {
    if (name === 'increases') {
      setQtd(qtd + 1);
      const sum = Number((total + Number(price)).toFixed(2));
      setTotal(sum);
    }
    if (name === 'decreases' && qtd > 0) {
      setQtd(qtd - 1);
      const sub = Number((total - Number(price)).toFixed(2));
      setTotal(sub);
    }
  };

  const handleChange = ({ target: { value } }) => {
    setQtd(Number(value));
    const sum = Number((total + (Number(value) * Number(price))).toFixed(2));
    setTotal(sum);
  };

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
      <div>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ changeQtd }
          name="decreases"
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          onChange={ handleChange }
          value={ qtd }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ changeQtd }
          name="increases"
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
