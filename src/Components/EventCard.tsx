import React, { useEffect, useState } from "react";
import img1 from "../assets/party posters/Summer-Party-Poster-Template.jpg";
import { EventData, UserData } from "../DataStructure.ts";
import { getUser, CanceledError } from "../Services/user-service.ts";
import { userExamples } from "../examples.ts"

interface EventProps {
  event: EventData ;
}

function EventCard({ event }: EventProps) {
  const [user, setUser] = useState<UserData >();
  
  // get the user of the event
  useEffect(() => {
        setUser(userExamples[0])
    // const { request , abort }  =  getUser(event?.owner_id)
    // request.then((res) => {
    //     setUser(res.data);
    
    //   })
    //   request.catch((err: any) => {
    //     if (err instanceof CanceledError) return;
    //     console.log(err);
        
    //   });
      return () => {
        // abort();
        console.log("clean up");
      }

  }, []);
    
  //     // setUser(event.user);
  //   }
  // },[]);
  return (
    <div className="card mx-4 my-2" key={"card-" + event?.id}>
      <img
        key={"card-img-" + event?.id}
        className="card-img-top"
        src={event?.event_pic_path || img1}
        style={{ height: "200px", width: "100%" }}
      />
      <div className="card-body" key={"card-body-" + event?.id}>
        <p
          key={"card-title-" + event?.id}
          className="text-break card-title fs-4 fw-bold"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {event?.title}
        </p>
        <p key={"card-date-" + event?.id} className="card-text fw-bold fs-5">
          {event?.date.toLocaleDateString()}
        </p>
        <p key={"card-owner-" + event?.id} className="card-text fw-bold fs-5">
          {user?.name }
        </p>
        <p key={"card-location-" + event?.id} className="card-text fw-bold fs-5">
          {event?.location}
        </p>
        <p className="d-md-inline card-text fw-bold fs-5">
          <i className="bi bi-heart"></i>
          &nbsp;
          {event. likes.length}
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
          key={"card-button-" + event?.id}
          href={"/event/" + event?.id}
          className="btn btn-dark fw-bold fs-6"
        >
          Event Images
        </a>
      </div>
    </div>
  );
}

export default EventCard;
