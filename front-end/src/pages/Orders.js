import { useEffect, useState } from 'react';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';
import { requestData } from '../services/requestUser';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getOrders() {
      const result = await requestData('/sales');
      console.log('sales', result);
      setOrders(result);
      setLoading(true);
    }
    getOrders();
  }, []);

  return (
    <main>
      <Header />
      <div>
        { !loading ? <span>Carregando...</span>
          : orders.map((order) => (
            <OrderCard
              key={ order.id }
              order={ order }
            />
          ))}
      </div>
    </main>

  );
}

export default Orders;
