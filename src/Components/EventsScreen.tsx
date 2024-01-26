import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EventCard, { EventData } from "./EventCard";


interface EventsScreenProps {
  events: EventData[];
}

function EventsScreen( {events}: EventsScreenProps) {
  return (
    <Row className="justify-content-md-center" xs={1} md={"auto"}>
      {events.map((event, index) => {
        return (
          <Col key={index}>
            <EventCard event={event} />
          </Col>
        );
      })}
    </Row>
  );
}

export default EventsScreen;
