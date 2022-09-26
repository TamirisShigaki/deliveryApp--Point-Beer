import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import AppContext from './appContext';

function AppProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  function totalPriceCalc(newCart) {
    const copyProductsCart = [...newCart];
    const totalPrice = copyProductsCart.reduce((acc, product) => {
      acc += product.subTotal;
      return acc;
    }, 0);
    setTotal(totalPrice);
  }

  function changeProductQtd(id, title, price, qtd) {
    const copyProductsCart = [...cart];
    const item = copyProductsCart.find((product) => product.id === id);
    if (!item) {
      copyProductsCart.push({ id, title, qtd, price, subTotal: qtd * price });
    } else {
      item.qtd = qtd;
      item.subTotal = qtd * price;
    }

    setCart(() => {
      totalPriceCalc(copyProductsCart);
      return copyProductsCart;
    });
    // setCart(copyProductsCart);
  }
  console.log(total);
  console.log(cart);

  function removeProductToCart(id, qtd) {
    const copyProductsCart = [...cart];

    const item = copyProductsCart.find((product) => product.id === id);

    if (item && qtd >= 1) {
      item.qtd = qtd;
      item.subTotal = qtd * item.price;
      setCart(copyProductsCart);
    } else {
      const arrayFiltered = copyProductsCart.filter(
        (product) => product.id !== id,
      );
      setCart(() => {
        totalPriceCalc(arrayFiltered);
        return arrayFiltered;
      });
      // setCart(arrayFiltered);
    }
  }

  function clearCart() {
    setCart([]);
  }

  const contextValue = useMemo(() => ({
    cart,
    total,
    setCart,
    changeProductQtd,
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
