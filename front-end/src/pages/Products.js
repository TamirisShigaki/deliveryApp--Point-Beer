import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import { requestData } from '../services/requestUser';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProducts() {
      const result = await requestData('/products');
      setProducts(result);
      setLoading(true);
    }
    getProducts();
  }, []);

  return (
    <main>
      <Header />
      <div>
        { !loading ? <span>Carregando...</span>
          : products.map(({ img, id, title }, index) => (
            <Card
              key={ id }
              title={ title }
              img={ img }
              index={ index }
            />))}
      </div>
    </main>

  );
}

export default Products;
