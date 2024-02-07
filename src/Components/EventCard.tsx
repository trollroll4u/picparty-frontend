import React, { useEffect, useState } from "react";
import img1 from "../assets/party posters/Summer-Party-Poster-Template.jpg";
import { EventData, UserData } from "../DataStructure.ts";
import { getUser, CanceledError } from "../Services/user-service.ts";
import { userExamples } from "../examples.ts";

interface EventProps {
  event: EventData;
}

function EventCard({ event }: EventProps) {
  const [user, setUser] = useState<UserData>();

  // get the user of the event
  useEffect(() => {
    console.log(event?.user_id);
    const fetchUser = async () => {
      try {
        const user = await getUser(event.user_id);
        setUser(user);
      } catch (error) {
        console.log("Error fetching user: " + error);
      }
    };
    fetchUser();
    return () => {
      // abort();
      console.log("clean up");
    };
  }, []);
  
  return (
    <div className="card mx-4 my-2" key={"card-" + event?._id}>
      <img
        key={"card-img-" + event?._id}
        className="card-img-top"
        src={event?.event_pic_path || img1}
        style={{ height: "200px", width: "100%" }}
      />
      <div className="card-body" key={"card-body-" + event?._id}>
        <p
          key={"card-title-" + event?._id}
          className="text-break card-title fs-5 fw-bold"
          style={{
            whiteSpace: "nowrap",
            // overflow: "hidden",
            // textOverflow: "ellipsis",
          }}
        >
          {event?.title}
        </p>
        <p key={"card-date-" + event?._id} className="card-text fw-bold fs-6">
          {event?.date.toLocaleDateString()}
        </p>
        <p key={"card-owner-" + event?._id} className="card-text fw-bold fs-6">
          {user?.name}
        </p>
        <p
          key={"card-location-" + event?._id}
          className="card-text fw-bold fs-6"
        >
          {event?.location}
        </p>
        <p className="d-md-inline card-text fw-bold fs-5">
          <i className="bi bi-heart"></i>
          &nbsp;
          {event.likes.length}
          &nbsp;&nbsp;
          <i className="card-text bi bi-chat" />
          &nbsp;
          {event.comments.length}
          &nbsp;&nbsp;
          <i className="card-text bi bi-image" />
          &nbsp;
          {event.pictures?.length}
        </p>
        <br></br>
        <br></br>
        <a
          key={"card-button-" + event?._id}
          href={"/event/" + event._id}
          className="btn btn-dark fw-bold fs-6"
        >
          Event Images
        </a>
      </div>
    </div>
  );
}

export default EventCard;
