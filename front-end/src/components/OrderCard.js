import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Card.css';

function OrderCard({ order: { id, status, saleDate, totalPrice } }) {
  const navigate = useNavigate();
  const formatData = (date) => {
    const four = 4;
    const eight = 8;
    const day = date.substr(eight, 2);
    const year = date.substr(2, 2);
    const month = date.substr(four + 1, 2);
    return `${day}/${month}/${year}`;
  };

  return (

    <button
      type="button"
      onClick={ () => navigate(`/customer/orders/${id}`) }
    >
      Pedido
      <span
        data-testid={ `customer_orders__element-order-id-${id}` }
      >
        {id}
      </span>
      <span
        data-testid={ `customer_orders__element-delivery-status-${id}` }
      >
        { status }
      </span>
      <span
        data-testid={ `customer_orders__element-order-date-${id}` }
      >
        { formatData(saleDate) }
      </span>
      R$
      <span
        data-testid={ `customer_orders__element-card-price-${id}` }
      >
        {totalPrice}
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
