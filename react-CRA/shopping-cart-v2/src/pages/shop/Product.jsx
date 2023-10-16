import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  return (
    <div className="Product">
      <img src={productImage} alt={`This is a ${productName}`} />
      <div className="Product-desc">
        <div className="Product-name">{productName}</div>
        <div className="Product-price-ctn">
          <div className="Product-price"> ${price}</div>
          <button className="Product-add-cart" onClick={() => addToCart(id)}>
            Add to cart: {cartItems[id]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
