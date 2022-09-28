import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Card.css';

function OrderCard({ seller, order: { id, status, saleDate, totalPrice } }) {
  const navigate = useNavigate();
  const formatData = (date) => {
    const four = 4;
    const eight = 8;
    const day = date.substr(eight, 2);
    const year = date.substr(0, four);
    const month = date.substr(four + 1, 2);
    return `${day}/${month}/${year}`;
  };

  return (

    <button
      type="button"
      onClick={ () => navigate(`/${seller ? 'seller' : 'customer'}/orders/${id}`) }
    >
      Pedido
      <span
        data-testid={ `${seller ? 'seller' : 'customer'}_orders__element-order-id-${id}` }
      >
        {id}
      </span>
      <span
        data-testid={
          `${seller ? 'seller' : 'customer'}_orders__element-delivery-status-${id}`
        }
      >
        { status }
      </span>
      <span
        data-testid={
          `${seller ? 'seller' : 'customer'}_orders__element-order-date-${id}`
        }
      >
        { formatData(saleDate) }
      </span>
      R$
      <span
        data-testid={
          `${seller ? 'seller' : 'customer'}_orders__element-card-price-${id}`
        }
      >
        {totalPrice.replace(/\./, ',')}
      </span>
    </button>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number,
  totalPrice: PropTypes.number,
  saleDate: PropTypes.string,
  status: PropTypes.string,
}.isRequired;

export default OrderCard;
