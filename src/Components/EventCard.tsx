import React from "react";
import Card from "react-bootstrap/Card";
import img1 from "../assets/party posters/Summer-Party-Poster-Template.jpg";

function EventCard() {
  return (
    <Card className="mx-4 my-2">
      <Card.Img
        variant="top"
        src={img1}
        style={{ height: "200px", width: "100%" }}
      />
      <Card.Body>
        <Card.Title>Event title</Card.Title>
        <Card.Text>01.01.25</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EventCard;
