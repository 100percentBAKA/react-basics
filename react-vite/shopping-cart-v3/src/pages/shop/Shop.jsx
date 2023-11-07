/* eslint-disable no-unused-vars */
import React from "react";
import { PRODUCTS } from "../../../Product.js";
import CardShop from "../../components/cardShop/CardShop.jsx";

const Shop = () => {
  return (
    <div className="w-5/6 m-auto">
      <div className="text-4xl font-bold text-center m-4 mb-8">
        Random Ecommerce
      </div>
      <div className="flex flex-wrap gap-12 items-center justify-center">
        {PRODUCTS.map((product) => {
          return <CardShop key={product.id} data={product} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
