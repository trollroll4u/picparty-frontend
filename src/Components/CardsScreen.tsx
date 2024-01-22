import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EventCard, { EventData } from "./EventCard"; 
import img1 from "../assets/party posters/Summer-Party-Poster-Template.jpg";

const events : EventData[]= [
  { image: "https://picsum.photos/200", title: "yosi party", date: new Date("2019-01-16"), owner: "ohad", location: "tel aviv" },
  { image: "https://picsum.photos/300", title: "yuval party", date: new Date(2019,5,22), owner: "ohad", location: "tel aviv" },
  { image: "https://picsum.photos/400", title: "dor party", date: new Date(), owner: "ohad", location: "tel aviv" },
  { image: {img1}, title: "event4", date: new Date(), owner: "ohad", location: "tel aviv" },
]

function CardScreen() {
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

export default CardScreen;
