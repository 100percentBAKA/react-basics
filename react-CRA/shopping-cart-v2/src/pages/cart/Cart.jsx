import React, { useContext } from "react";
import "./Cart.css";
import { PRODUCTS } from "../../Product";
import { ShopContext } from "../../context/ShopContextProvider";
import CartProduct from "./CartProduct";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="Cart">
      <h1>Cart Summary</h1>
      <div className="Cart-card">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <CartProduct data={product} quantity={cartItems[product.id]} />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
