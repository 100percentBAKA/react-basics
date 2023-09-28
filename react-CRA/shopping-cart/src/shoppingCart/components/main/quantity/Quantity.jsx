import React, { Component } from "react";
import "../quantity/Quantity.css";

export default class Quantity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }

  handlePlusClick = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
    console.log(`${this.props.id} was clicked`);
  };

  handleMinusClick = () => {
    if (this.state.quantity > 0) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }));
    }
    console.log(`${this.props.id} was clicked`);
  };

  render() {
    return (
      <div className="Quantity">
        <button className="Quantity-plus" onClick={this.handlePlusClick}>
          +
        </button>
        <div className="Quantity-no">{this.state.quantity}</div>
        <button className="Quantity-minus" onClick={this.handleMinusClick}>
          -
        </button>
      </div>
    );
  }
}
