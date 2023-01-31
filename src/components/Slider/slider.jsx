import React from "react";

import "./slider.scss";
import { Carousel } from "react-bootstrap";
import Slider__item from "../Slider__item/slider__item";

const Slider = (props) => {
  const item = props.items;

  return (
    <Carousel fade touch controls={false}>
      {item.map((item) => {
        return (
          <Carousel.Item style={{ height: "373px" }}>
            <Slider__item item={item}></Slider__item>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Slider;
