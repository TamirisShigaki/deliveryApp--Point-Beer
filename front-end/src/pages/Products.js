import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Header from '../components/Header';
import appContext from '../context/appContext';
import { requestData } from '../services/requestUser';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { total } = useContext(appContext);
  const totalPrice = `${total.toFixed(2)}`;
  const navigate = useNavigate();

  useEffect(() => {
    async function getProducts() {
      const result = await requestData('/products');
      setProducts(result);
      setLoading(true);
    }
    getProducts();
  }, []);

  const finishedCart = () => {
    navigate('/customer/checkout');
  };

  return (
    <main>
      <Header />
      <div>
        { !loading ? <span>Carregando...</span>
          : products.map(({ id, name, price, urlImage }) => (
            <Card
              data-testid={ `customer_products__element-card-title-${id}` }
              key={ id }
              price={ price }
              title={ name }
              img={ urlImage }
              id={ id }
            />))}
      </div>
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ finishedCart }
        disabled={ total === 0 }
      >
        Ver carrinho: R$
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          {` ${totalPrice.replace(/\./, ',')}`}
        </span>
      </button>
    </main>

  );
}

export default Products;
