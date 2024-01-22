import Carousel from "react-bootstrap/Carousel";
import imgUrl from "../assets/group-selfie-pic.jpeg";
import React from "react";

function IndividualIntervalsExample() {
  return (
    <Carousel >
      {Array.from({ length: 4 }).map((_, idx) => (
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            style={{ height: "60vh" }}
            src={imgUrl}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default IndividualIntervalsExample;
