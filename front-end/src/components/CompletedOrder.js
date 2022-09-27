import React, { useContext } from 'react';
import DeliveryAdress from './DeliveryAddress';
import Table from './Table';
import appContext from '../context/appContext';

function CompletedOrder() {
  const { total } = useContext(appContext);
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
