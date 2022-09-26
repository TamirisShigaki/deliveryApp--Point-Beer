import React, { useEffect, useState } from 'react';
import { requestData } from '../services/requestUser';

export default function DeliveryAdress() {
  const [sellers, setSellers] = useState([]);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    async function getSellers() {
      const result = await requestData('/users/sellers');
      setSellers(result);
    }
    getSellers();
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'address') {
      setAddress(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

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
            {sellers.map(({ id, name }) => (
              <option
                key={ id }
                value={ id }
              >
                {name}
              </option>))}

          </select>
        </label>

        <label htmlFor="address">
          Endereço
          <input
            type="text"
            data-testid="customer_checkout__input-address"
            id="address"
            name="address"
            value={ address }
            onChange={ (event) => handleChange(event) }
          />
        </label>

        <label htmlFor="number">
          Número
          <input
            type="text"
            data-testid="customer_checkout__input-addressNumber"
            id="number"
            name="number"
            value={ number }
            onChange={ (event) => handleChange(event) }
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
