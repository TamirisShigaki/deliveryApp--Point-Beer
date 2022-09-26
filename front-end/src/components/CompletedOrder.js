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
        <span
          type="button"
          data-testid="customer_checkout__element-order-total-price"
        >
          {`Total: R$ ${total}`}
        </span>
      </div>

      <DeliveryAdress />
    </div>
  );
}

export default CompletedOrder;
