import React from 'react';
import DeliveryAdress from './DeliveryAddress';
import Table from './Table';

function CompletedOrder() {
  const total = JSON.parse(localStorage.getItem('total'));
  return (
    <div>
      <h1>Finalizar Pedido</h1>
      <div>
        <Table />
        <span
          type="button"
          data-testid="customer_checkout__element-order-total-price"
        >
          {`Total: R$ ${total.toFixed(2)}`}
        </span>
      </div>

      <DeliveryAdress />
    </div>
  );
}

export default CompletedOrder;
