import React from "react";
import Card from "react-bootstrap/Card";
import img1 from "../assets/party posters/Summer-Party-Poster-Template.jpg";

export interface EventData {
  image?: string;
  title: string;
  date: Date;
  owner: string;
  location: string;
}

interface EventProps {
  event: EventData;
}

function EventCard({ event }: EventProps) {
  return (
    <Card className="mx-4 my-2">
      <Card.Img
        variant="top"
        src={event.image}
        style={{ height: "200px", width: "100%" }}
      />
      <Card.Body>
        <Card.Title>{event.title}</Card.Title>
        <Card.Text>Date: {event.date.toLocaleDateString()}</Card.Text>
        <Card.Text>location: {event.location}</Card.Text>
        <Card.Text>owner: {event.owner}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EventCard;
