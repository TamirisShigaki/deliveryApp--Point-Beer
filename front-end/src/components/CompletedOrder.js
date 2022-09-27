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
        Total: R$
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          {(Number(total).toFixed(2)).replace(/\./, ',')}
        </span>
      </div>

      <DeliveryAdress />
    </div>
  );
}

export default CompletedOrder;
