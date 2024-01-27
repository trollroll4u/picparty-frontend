import React from "react";
import img1 from "../assets/party posters/Summer-Party-Poster-Template.jpg";

export interface EventData {
  id?: number;
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
    <div className="card mx-4 my-2" id={"card-" + event.id}>
      <img
        id={"card-img-" + event.id}
        className="card-img-top"
        src={event.image || img1}
        style={{ height: "200px", width: "100%" }}
      />
      <div className="card-body" id={"card-body-" + event.id}>
        <p
          id={"card-title-" + event.id}
          className="text-break card-title fs-4 fw-bold"
          style={{
            
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            
          }}
        >
          {event.title}
        </p>
        <p id={"card-date-" + event.id} className="card-text fw-bold fs-5">
          {event.date.toLocaleDateString()}
        </p>
        <p id={"card-owner-" + event.id} className="card-text fw-bold fs-5">
          {event.owner}
        </p>
        <p id={"card-location-" + event.id} className="card-text fw-bold fs-5">
          {event.location}
        </p>
        <a
          id={"card-button-" + event.id}
          href="/"
          className="btn btn-dark fw-bold fs-4"
        >
          Event pic
        </a>
      </div>
    </div>
  );
}

export default EventCard;
