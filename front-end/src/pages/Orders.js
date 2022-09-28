import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';
import { requestData } from '../services/requestUser';

function Orders({ seller }) {
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
      <Header seller={ seller } />
      <div>
        { !loading ? <span>Carregando...</span>
          : orders.map((order) => (
            <OrderCard
              seller={ seller }
              key={ order.id }
              order={ order }
            />
          ))}
      </div>
    </main>
  );
}

Orders.propTypes = {
  seller: PropTypes.boolean,
}.isRequired;

export default Orders;
