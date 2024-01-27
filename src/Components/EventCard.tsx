import React from "react";
import img1 from "../assets/party posters/Summer-Party-Poster-Template.jpg";
import { EventData } from "../DataStructure.ts";

interface EventProps {
  event: EventData;
}

function EventCard({ event }: EventProps) {
  return (
    <div className="card mx-4 my-2" key={"card-" + event.id}>
      <img
        key={"card-img-" + event.id}
        className="card-img-top"
        src={event.event_pic || img1}
        style={{ height: "200px", width: "100%" }}
      />
      <div className="card-body" key={"card-body-" + event.id}>
        <p
          key={"card-title-" + event.id}
          className="text-break card-title fs-4 fw-bold"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {event.title}
        </p>
        <p key={"card-date-" + event.id} className="card-text fw-bold fs-5">
          {event.date.toLocaleDateString()}
        </p>
        <p key={"card-owner-" + event.id} className="card-text fw-bold fs-5">
          {event.owner}
        </p>
        <p key={"card-location-" + event.id} className="card-text fw-bold fs-5">
          {event.location}
        </p>
        <a
          key={"card-button-" + event.id}
          href={"/event/" + event.id}
          className="btn btn-dark fw-bold fs-4"
        >
          Event pic
        </a>
      </div>
    </div>
  );
}

export default EventCard;
