import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EventCard from "./EventCard"; 

function CardScreen() {
  return (
    <Row className="justify-content-md-center" xs={1} md={"auto"}>
      {Array.from({ length: 40 }).map((_, idx) => (
        <Col key={idx}>
          <EventCard />
        </Col>
      ))}
    </Row>
  );
}

export default CardScreen;
