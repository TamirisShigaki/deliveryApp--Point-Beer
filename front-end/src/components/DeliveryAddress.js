import React from 'react';

function DeliveryAdress() {
  return (
    <div>
      <h1>Detalhes e Endereço para Entrega</h1>

      <form>
        <label htmlFor="seller">
          P. Vendedora Responsável
          <select
            data-testid="customer_checkout__select-seller"
            id="seller"
            name="seller"
          >
            { VendedoraResponsavel }
          </select>
        </label>

        <label htmlFor="adress">
          Endereço
          <input
            type="text"
            data-testid="customer_checkout__input-address"
            id="adress"
            name="value"
          />
        </label>

        <label htmlFor="number">
          Número
          <input
            type="text"
            data-testid="customer_checkout__input-addressNumber"
            id="number"
            name="number"
          />
        </label>
      </form>

      <button
        type="button"
        data-testid="customer_checkout__input-addressNumber"
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}

export default DeliveryAdress;
