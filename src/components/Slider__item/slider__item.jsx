import React from "react";
import { Card } from "react-bootstrap";

import "./slider__item.scss";

const Slider__item = (props) => {
  const item = props.item;
  return (
    <Card style={{ width: "100%", height: "100%" }}>
      <Card.Img variant="top" src={item.img} height="225px" width="100%" />
      <Card.Body className="bg-primary" style={{ textAlign: "start" }}>
        <Card.Title className="text-light h6">{item.title}</Card.Title>
        <Card.Text className="text-light">Ngày đăng: {item.date}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Slider__item;
