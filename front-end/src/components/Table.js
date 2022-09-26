import { useContext } from 'react';
import PropTypes from 'prop-types';
import appContext from '../context/appContext';

function Table({ id, title, qtd, price, subTotal, index }) {
  const { removeFromCart } = useContext(appContext);

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

      <tbody>
        <tr key={ id }>
          <td
            data-testId="customer_checkout__element-order-table-item-number-[index]"
          >
            { index }
          </td>
          <td
            data-testId="customer_checkout__element-order-table-name-[index]"
          >
            { title }
          </td>
          <td
            data-testId="customer_checkout__element-order-table-quantity-[index]"
          >
            { qtd }
          </td>
          <td
            data-testId="customer_checkout__element-order-table-unit-price-[index]"
          >
            { price }
          </td>
          <td
            data-testId="customer_checkout__element-order-table-sub-total-[index]"
          >
            { subTotal }
          </td>
          <td>
            <button
              type="button"
              data-testId="customer_checkout__element-order-table-remove-[index]"
              onClick={ () => removeFromCart(id) }
            >
              Remover
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

Table.propTypes = {
  id: PropTypes.string,
  subTotal: PropTypes.number,
  index: PropTypes.number,
  price: PropTypes.number,
  title: PropTypes.string,
  qtd: PropTypes.number,
}.isRequired;

export default Table;
