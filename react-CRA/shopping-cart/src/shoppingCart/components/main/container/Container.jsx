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
          id={1}
        />
        <Card
          name="Office Shirt"
          imgPath={IMG_SRC + "img-2.jpg"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing. "
          cost="$ 100"
          id={2}
        />
        <Card
          name="T Shirt"
          imgPath={IMG_SRC + "img-3.jpg"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing. "
          cost="$ 25"
          id={3}
        />
        <Card
          name="Mens Suit"
          imgPath={IMG_SRC + "img-4.jpg"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing. "
          cost="$ 300"
          id={4}
        />
        <Card
          name="Mens Tie"
          imgPath={IMG_SRC + "img-5.png"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing. "
          cost="$ 25"
          id={5}
        />
        <Card
          name="Casual Shoes"
          imgPath={IMG_SRC + "img-6.png"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing. "
          cost="$ 145"
          id={6}
        />
        <Card
          name="Black Suit"
          imgPath={IMG_SRC + "img-7.png"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing. "
          cost="$ 450"
          id={7}
        />
        <Card
          name="Polo Shirt"
          imgPath={IMG_SRC + "img-8.png"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing. "
          cost="$ 45"
          id={8}
        />
        <Card
          name="Denim Shirt"
          imgPath={IMG_SRC + "img-9.png"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing. "
          cost="$ 85"
          id={9}
        />
        <Card
          name="Denim Pant"
          imgPath={IMG_SRC + "img-10.png"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing. "
          cost="$ 125"
          id={10}
        />
        <Card
          name="Basic Cap"
          imgPath={IMG_SRC + "img-11.png"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing. "
          cost="$ 35"
          id={11}
        />
        <Card
          name="Leather Boots"
          imgPath={IMG_SRC + "img-12.png"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing. "
          cost="$ 245"
          id={12}
        />
      </div>
    );
  }
}
