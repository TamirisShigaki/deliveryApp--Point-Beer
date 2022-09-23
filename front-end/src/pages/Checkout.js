import React from 'react';
import Header from '../components/Header';
import CompletedOrder from '../components/CompletedOrder';
import DeliveryAdress from '../components/DeliveryAddress';

function Checkout() {
  return (
    <div>
      <Header />
      <CompletedOrder />
      <DeliveryAdress />
    </div>
  );
}

export default Checkout;
