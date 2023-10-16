import React, { useContext } from "react";
import "./CartProduct.css";
import { ShopContext } from "../../context/ShopContextProvider";

const CartProduct = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="CartProduct" key={id}>
      <img src={productImage} alt={`This is a ${productImage}`} />
      <div className="CartProduct-detail">
        <div className="CartProduct-title">{productName}</div>
        <div className="CartProduct-price">${price}</div>
        <div className="CartProduct-quantity-handler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input value={cartItems[id]} />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
