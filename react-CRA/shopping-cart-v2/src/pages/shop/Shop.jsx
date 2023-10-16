import React from "react";
import { PRODUCTS } from "../../Product";
import Product from "./Product";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="Shop">
      <div className="Shop-title">Random Ecommerce</div>
      <div className="Shop-cards-ctn">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
