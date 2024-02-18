import React, { useEffect, useState } from "react";
import img1 from "../assets/party posters/Summer-Party-Poster-Template.jpg";
import { EventData, UserData } from "../DataStructure.ts";
import { getUser } from "../Services/user-service.ts";
import { userExamples } from "../examples.ts";
import image from "../../../picparty-backend/images/default.jpeg";

interface EventProps {
  event: EventData;
}

function EventCard({ event }: EventProps) {
  const [owner, setOwner] = useState<UserData>();
  const [imageFileExtention, setImageFileExtention] = useState<string>("");

  // get the user of the event
  useEffect(() => {
    const fetchUser = async (owner_id: string) => {
      try {
        await getUser(owner_id).then((res) => {
          setOwner(res);
        });
      } catch (error) {
        console.log("Error fetching user: " + error);
      }
    };
    fetchUser(event.user_id);
    setImageFileExtention(event.event_pic_file?.split(".")[1]);
    return () => {
    };
  }, []);

  return (
    <div className="card mx-4 my-2" key={"card-" + event?._id}>
      <img
        key={"card-img-" + event?._id}
        className="card-img-top"
        src={`data:image/${imageFileExtention};base64,` + event.event_pic_file}
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
          {owner?.name || "ddd"}
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
