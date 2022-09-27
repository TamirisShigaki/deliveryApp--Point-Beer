import { useContext } from 'react';
import PropTypes from 'prop-types';
import appContext from '../context/appContext';

function Table() {
  const { removeFromCart } = useContext(appContext);
  const cart = JSON.parse(localStorage.getItem('cart'));

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
      </thead>

      {cart.map(({ id, title, qtd, price, subTotal }, index) => (
        <tbody key={ id }>
          <tr>
            <td
              data-testid={
                `customer_checkout__element-order-table-item-number-${index}`
              }
            >
              { index + 1 }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-name-${index}` }
            >
              { title }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
            >
              { qtd }
            </td>
            <td>
              R$
              <span
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                {(Number(price).toFixed(2)).replace(/\./, ',')}
              </span>
            </td>
            <td>
              R$
              <span
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {(Number(subTotal).toFixed(2)).replace(/\./, ',')}
              </span>
            </td>
            <td>
              <button
                type="button"
                data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                onClick={ () => removeFromCart(id) }
              >
                Remover
              </button>
            </td>
          </tr>
        </tbody>))}
    </table>
  );
}

Table.propTypes = {
  id: PropTypes.string,
  subTotal: PropTypes.number,
  price: PropTypes.number,
  title: PropTypes.string,
  qtd: PropTypes.number,
}.isRequired;

export default Table;
