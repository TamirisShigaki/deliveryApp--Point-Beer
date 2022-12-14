import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import AppContext from './appContext';

function AppProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLogged, setIsLogged] = useState(false);

  function sendToLocalStorage(item) {
    localStorage.setItem('cart', JSON.stringify(item));
  }

  function totalPriceCalc(newCart) {
    const copyProductsCart = [...newCart];
    const totalPrice = copyProductsCart.reduce((acc, product) => {
      acc += product.subTotal;
      return acc;
    }, 0);
    setTotal(totalPrice);
    localStorage.setItem('total', JSON.stringify(totalPrice));
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
      sendToLocalStorage(copyProductsCart);
      return copyProductsCart;
    });
    // setCart(copyProductsCart);
  }

  function removeProductToCart(id, qtd) {
    const copyProductsCart = [...cart];

    const item = copyProductsCart.find((product) => product.id === id);

    if (item && qtd >= 1) {
      item.qtd = qtd;
      item.subTotal = qtd * item.price;
      setCart(() => {
        sendToLocalStorage(copyProductsCart);
        return copyProductsCart;
      });
    } else {
      const arrayFiltered = copyProductsCart.filter(
        (product) => product.id !== id,
      );
      setCart(() => {
        totalPriceCalc(arrayFiltered);
        sendToLocalStorage(copyProductsCart);
        return arrayFiltered;
      });
      // setCart(arrayFiltered);
    }
  }

  function removeFromCart(id) {
    const copyProductsCart = [...cart];

    const item = copyProductsCart.filter((product) => product.id !== id);
    console.log(item);
    setCart(() => {
      totalPriceCalc(item);
      sendToLocalStorage(item);
      return item;
    });
  }

  function clearCart() {
    setCart(() => {
      sendToLocalStorage([]);
      return [];
    });
  }

  const contextValue = useMemo(() => ({
    cart,
    total,
    setCart,
    changeProductQtd,
    removeProductToCart,
    clearCart,
    removeFromCart,
    sendToLocalStorage,
    setIsLogged,
    isLogged,
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
