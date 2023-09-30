import React, { Component } from "react";
import "../component/SingleCard.css";

export default class SingleCard extends Component {
  render() {
    return (
      <div className="App-card" key={this.props.id}>
        <div>
          <img
            src={this.props.src}
            className="App-card-front"
            alt="card front"
          />
          <img
            src={`${process.env.PUBLIC_URL}/img/cover.png`}
            className="App-card-back"
            alt="card back"
          />
        </div>
      </div>
    );
  }
}
