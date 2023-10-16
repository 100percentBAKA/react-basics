import React from "react";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  return (
    <div className="Product" key={id}>
      <img src={productImage} alt={`This is a ${productName}`} />
      <div className="Product-desc">
        <div className="Product-name">{productName}</div>
        <div className="Product-price-ctn">
          <div className="Product-price"> ${price}</div>
          <button className="Product-add-cart">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
