import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import StatusOrder from '../components/StatusOrder';
import Table from '../components/Table';
import { requestData } from '../services/requestUser';

function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    async function getOrders() {
      const result = await requestData(`/sales/${id}`);
      setOrder(result);
    }
    getOrders();
  }, []);
  // console.log(order.totalPrice);
  const total = order.totalPrice;
  return (
    <div>
      <Header />
      <h1>Detalhes do Pedido</h1>
      <StatusOrder order={ order } />
      <Table button={ false } />
      <div>
        Total: R$
        <span
          data-testid="customer_order_details__element-order-total-price"
        >
          {` ${total?.replace(/\./, ',')}`}
        </span>
      </div>
    </div>
  );
}

export default OrderDetails;
