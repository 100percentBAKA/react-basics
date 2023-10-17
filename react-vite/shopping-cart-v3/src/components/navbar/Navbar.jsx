import React from "react";
import { Link } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="w-full h-12 bg-gray-600">
      <div className="text-white flex justify-end items-center gap-4 text-2xl mr-4 h-full">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <PiShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
