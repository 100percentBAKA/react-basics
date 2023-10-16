import React, { createContext, useState } from "react";
import { PRODUCTS } from "../Product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {}; // Cart --> Object
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0; // Initial quantity of the items set to 0
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // * ADD TO CART
  const addToCart = (itemID) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [itemID]: prevItems[itemID] + 1,
    }));
  };

  // * REMOVE FROM CART
  const removeFromCart = (itemID) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [itemID]: prevItems[itemID] - 1,
    }));
  };

  // * FINAL CONTEXT
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  console.log(cartItems);

  return (
    // * CONTEXT WILL BE PASSED AS VALUE
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
