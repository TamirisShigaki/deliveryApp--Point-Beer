import React from 'react';
import Table from './Table';

function CompletedOrder() {
  return (
    <div>
      <h1>Finalizar Pedido</h1>
      <Table />
      <button
        type="button"
        data-testId="customer_checkout__element-order-total-price"
      >
        Total:
      </button>
    </div>
  );
}

export default CompletedOrder;
