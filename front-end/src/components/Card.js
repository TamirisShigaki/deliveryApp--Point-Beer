import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import appContext from '../context/appContext';

function Card({ price, img, title, id }) {
  const [qtd, setQtd] = useState(0);
  const { removeProductToCart, changeProductQtd } = useContext(appContext);

  const changeQtd = ({ target: { name, value } }) => {
    if (name === 'increases') {
      setQtd((prevQtd) => {
        changeProductQtd(id, title, price, prevQtd + 1);
        return prevQtd + 1;
      });
    } else if (name === 'decreases' && qtd > 0) {
      setQtd((prevQtd) => {
        removeProductToCart(id, prevQtd - 1);
        return prevQtd - 1;
      });
    } else if (name === 'input') {
      setQtd(Number(value));
      changeProductQtd(id, title, price, Number(value));
      console.log('value', value);
    }
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
          onClick={ (event) => changeQtd(event) }
          name="decreases"
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          onChange={ (event) => changeQtd(event) }
          value={ qtd }
          name="input"
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ (event) => changeQtd(event) }
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
