import React, { Component } from "react";
import Quantity from "../quantity/Quantity";
import "./Card.css";

export default class Card extends Component {
  render() {
    return (
      <div className="Card">
        <div className="Card-image">
          <img src={this.props.imgPath} alt={`A ${this.props.name}`} />
        </div>
        <div className="Card-content">
          <div className="Card-text-content">{this.props.name}</div>
          <div className="Card-description">{this.props.desc}</div>
          <div className="Card-cost-display">
            <div className="Card-price">{this.props.cost}</div>
            <Quantity />
          </div>
        </div>
      </div>
    );
  }
}
