import React, { Component } from "react";
import Card from "../card/Card";
import "../container/Container.css";

export default class Container extends Component {
  render() {
    const IMG_SRC = `${process.env.PUBLIC_URL}/Assets/images/`;

    return (
      <div className="Container">
        <Card
          name="Casual Shirt"
          imgPath={IMG_SRC + "img-1.jpg"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing. "
          cost="$ 45"
        />
        <Card
          name="Office Shirt"
          imgPath={IMG_SRC + "img-2.jpg"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing. "
          cost="$ 100"
        />
        <Card
          name="T Shirt"
          imgPath={IMG_SRC + "img-3.jpg"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing. "
          cost="$ 25"
        />
        <Card
          name="Mens Suit"
          imgPath={IMG_SRC + "img-4.jpg"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing. "
          cost="$ 300"
        />
        <Card
          name="Mens Tie"
          imgPath={IMG_SRC + "img-5.png"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing. "
          cost="$ 25"
        />
        <Card
          name="Casual Shoes"
          imgPath={IMG_SRC + "img-6.png"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing. "
          cost="$ 145"
        />
        <Card
          name="Black Suit"
          imgPath={IMG_SRC + "img-7.png"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing. "
          cost="$ 450"
        />
        <Card
          name="Polo Shirt"
          imgPath={IMG_SRC + "img-8.png"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing. "
          cost="$ 45"
        />
        <Card
          name="Denim Shirt"
          imgPath={IMG_SRC + "img-9.png"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing. "
          cost="$ 85"
        />
        <Card
          name="Denim Pant"
          imgPath={IMG_SRC + "img-10.png"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing. "
          cost="$ 125"
        />
        <Card
          name="Basic Cap"
          imgPath={IMG_SRC + "img-11.png"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing. "
          cost="$ 35"
        />
        <Card
          name="Leather Boots"
          imgPath={IMG_SRC + "img-12.png"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing. "
          cost="$ 245"
        />
      </div>
    );
  }
}
