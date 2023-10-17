import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { PRODUCTS } from "../../Product";
import { ShopContext } from "../../context/ShopContextProvider";
import CartProduct from "./CartProduct";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  const [total, setTotal] = useState(0);
  const [discountApplied, setDiscountApplied] = useState(false);

  useEffect(() => {
    let newTotal = 0;
    PRODUCTS.map((product) => {
      if (cartItems[product.id] !== 0) {
        newTotal += product.price * cartItems[product.id];
      }
    });

    if (discountApplied) {
      newTotal -= newTotal * 0.1;
    }

    setTotal(newTotal);
  }, [cartItems, discountApplied]);

  // * useEffect hook is used to render/re-render when ever its dependencies change their state

  // ! Total is not added as a dependency as it leads to infinite loop

  // ! 1) When the component renders, the useEffect calculates the initial total value and sets it using setTotal. This update triggers a re-render of the component.

  // ! 2) During the re-render, the useEffect runs again because total is a dependency. It calculates the new total based on the updated cartItems and sets it using setTotal.

  // const calculateTotal = () => {
  //   let total = 0;

  //   PRODUCTS.map((product) => {
  //     if (cartItems[product.id] !== 0) {
  //       total += product.price * cartItems[product.id];
  //     }
  //   });

  //   return total;
  // };

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
      <div className="Cart-total">
        <div>Total: ${total}</div>
        <button
          className="Cart-discount"
          onClick={() => setDiscountApplied(true)}
        >
          Click for 10% off!
        </button>

        {/* Regardless of how many times the discount button is clicked, the state will remain 'true'. Since there is no state change, the useEffect hook is not executed upon clicking the buttons multiple times  */}
      </div>
    </div>
  );
};

export default Cart;
