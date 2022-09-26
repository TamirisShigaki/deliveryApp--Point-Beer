import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Card.css';

function OrderCard({ id, totalPrice, saleDate, status }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={ () => navigate(`/customer/orders/${id}`) }
    >
      <span
        data-testid={ `customer_orders__element-order-id-${id}` }
      >
        {`Pedido ${id} `}
      </span>
      <span
        data-testid={ `customer_orders__element-delivery-status-${id}` }
      >
        { status }
      </span>
      <span
        data-testid={ `customer_orders__element-order-date-${id}` }
      >
        { saleDate }
      </span>
      <span
        data-testid={ `customer_orders__element-card-price-${id}` }
      >
        {`R$ ${totalPrice}`}
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
