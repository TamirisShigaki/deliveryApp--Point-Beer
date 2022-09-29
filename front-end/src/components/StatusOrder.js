import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function StatusOrder({ seller, order }) {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <ul>
        <li
          data-testid={
            `${seller ? 'seller' : 'customer'}
            _order_details__element-order-details-label-order-id`
          }
        >
          {`Pedido ${order.id}`}
        </li>
        {!seller && (
          <li
            data-testid={
              `${seller ? 'seller' : 'customer'}
                    _order_details__element-order-details-label-seller-name`
            }
          >
            {`P.Vend: ${order.seller?.name}`}
          </li>
        )}
        <li
          data-testid={
            `${seller ? 'seller' : 'customer'}
            _order_details__element-order-details-label-order-date`
          }
        >
          {moment(order.saleDate).format('DD/MM/yyyy')}
        </li>
        <li
          data-testid={
            `${seller ? 'seller' : 'customer'}
            _order_details__element-order-details-label-delivery-status-
            ${order.id}`
          }
        >
          {checked
            ? 'Entregue'
            : order.status}
        </li>
        <li>
          <button
            data-testid={
              `${seller ? 'seller' : 'customer'}
            _order_details__button-delivery-check`
            }
            type="button"
            onClick={ () => setChecked(!checked) }
            disabled
          >
            Marcar como entregue
          </button>
        </li>
      </ul>
    </div>
  );
}

StatusOrder.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default StatusOrder;
