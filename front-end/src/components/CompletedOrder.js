import React, { useContext } from 'react';
import DeliveryAdress from './DeliveryAddress';
import appContext from '../context/appContext';
import Table from './Table';

function CompletedOrder() {
  const { total } = useContext(appContext);
  const totalPrice = `${total.toFixed(2)}`;
  return (
    <div>
      <h1>Finalizar Pedido</h1>
      <div>
        <Table button />
        Total: R$
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          {` ${totalPrice.replace(/\./, ',')}`}
        </span>
      </div>

      <DeliveryAdress />
    </div>
  );
}

export default CompletedOrder;
