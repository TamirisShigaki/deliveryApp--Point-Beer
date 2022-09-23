import React from 'react';

function Table() {
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
            { Item }
          </td>
          <td
            data-testId="customer_checkout__element-order-table-name-[index]"
          >
            { Descrição }
          </td>
          <td
            data-testId="customer_checkout__element-order-table-quantity-[index]"
          >
            { Quantidade }
          </td>
          <td
            data-testId="customer_checkout__element-order-table-unit-price-[index]"
          >
            { ValorUnitário }
          </td>
          <td
            data-testId="customer_checkout__element-order-table-sub-total-[index]"
          >
            { Subtotal }
          </td>
          <td>
            <button
              type="button"
              data-testId="customer_checkout__element-order-table-remove-[index]"
            >
              Remover
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
