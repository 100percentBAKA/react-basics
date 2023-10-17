import React from "react";

const CardShop = (props) => {
  const { id, productName, desc, productImage, cost } = props.data;

  return (
    <div className="flex-col w-60 rounded-sm border-black border-2">
      <img src={productImage} alt={`This is a ${productName}`} />
      <div className="flex-col p-3">
        <div className="text-xl font-bold mb-2">{productName}</div>
        <div>{desc}</div>

        <div className="flex items-center justify-between">
          <div className="text-xl font-bold mt-2">${cost}</div>
          <div className="text-xl font-bold mr-2 mt-1">
            <button className="mr-2">-</button>
            <input className="w-3" />
            <button className="ml-2">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShop;
