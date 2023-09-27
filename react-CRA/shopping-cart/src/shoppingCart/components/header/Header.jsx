import React, { Component } from "react";
import Cart from "../cart/Cart";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1 className="Header-title">Clothing Store</h1>
        <Cart />
      </div>
    );
  }
}
