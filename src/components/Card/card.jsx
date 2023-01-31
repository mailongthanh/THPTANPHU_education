import React from "react";
import { Card } from "react-bootstrap";

import { CaretRightOutlined } from "@ant-design/icons";
import "./card.scss";

const CardContainer = (props) => {
  const item = props;
  return (
    <div className="CardContainer">
      <Card style={{ width: "100%", height: "100%", textAlign: "start" }}>
        <Card.Header as="h6" className="text-light bg-primary">
          {item.title}
        </Card.Header>
        <Card.Body>
          {item.content.map((item) => {
            return (
              <Card.Text>
                <CaretRightOutlined
                  className="text-danger"
                  style={{ fontSize: "12px" }}
                />
                <a href="#" className="text-decoration-none">
                  {item.content}
                </a>
                - {item.dateTime}
              </Card.Text>
            );
          })}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardContainer;
