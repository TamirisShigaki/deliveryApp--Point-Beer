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
      console.log(result);
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
          : products.map(({ name, price, url_image: urlImage, id }) => (
            <Card
              key={ id }
              price={ price }
              title={ name }
              img={ urlImage }
              id={ id }
            />))}
      </div>
    </main>

  );
}

export default Products;
