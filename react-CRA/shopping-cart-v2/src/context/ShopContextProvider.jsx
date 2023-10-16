import React, { createContext, useState } from "react";
import { PRODUCTS } from "../Product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {}; // Cart --> Object
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i] = 0; // Initial quantity of the items set to 0
  }

  return cart;
};

export const ShopContextProvider = () => {
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
  const ContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider>
      {/* Context will be returned here */}
    </ShopContext.Provider>
  );
};
