import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import AppContext from './appContext';

function AppProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addProducToCart(id, title, price, qtd) {
    const copyProductsCart = [...cart];

    const item = copyProductsCart.find((product) => product.id === id);
    if (!item) {
      copyProductsCart.push({ id, title, qtd, price });
    } else {
      item.qtd = qtd;
    }

    setCart(copyProductsCart);
  }
  console.log(cart);
  // function addInput(id, title, price, qtd) {
  //   const copyProductsCart = [...cart];
  //   const item = copyProductsCart.find((product) => product.id === id);
  //   if (!item) {
  //     copyProductsCart.push({ id, title, qtd, price });
  //   } else {
  //     item.qtd = qtd;
  //   }

  //   setCart(copyProductsCart);
  // }

  function removeProductToCart(id, qtd) {
    const copyProductsCart = [...cart];

    const item = copyProductsCart.find((product) => product.id === id);

    if (item && qtd >= 1) {
      item.qtd = qtd;
      setCart(copyProductsCart);
    } else {
      const arrayFiltered = copyProductsCart.filter(
        (product) => product.id !== id,
      );
      setCart(arrayFiltered);
    }
  }

  function clearCart() {
    setCart([]);
  }

  const contextValue = useMemo(() => ({
    cart,
    setCart,
    addProducToCart,
    removeProductToCart,
    clearCart,
  }), [cart]);

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.node).isRequired,
};

export default AppProvider;
