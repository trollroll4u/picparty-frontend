import * as React from "react";
import { EventData, PictureData, UserData } from "../DataStructure.ts";
import PhotosScreen from "../Components/PhotosScreen.tsx";
import { eventsExamples, picturesExamples, userExamples } from "../examples.ts";
import { useState } from "react";
import axios from "axios";

export interface IAppProps {
  event_id: number;
}

function EventScreen(event_id: IAppProps) {
  const [event, setEvent] = useState<EventData>();
  const [user, setUser] = useState<UserData>();
  React.useEffect(() => {
    // setLoading(true);
    // const { request , abort }  =  getAllEvents()
    // request.then((res: { data: React.SetStateAction<EventData[]>; }) => {
    //     // setEvents(res.data);
    //     setLoading(false);
    //   })
    //   request.catch((err: any) => {
    //     if (err instanceof CanceledError) return;
    //     console.log(err);
    //     setLoading(false);
    //   });
    axios.get("http://localhost:3000/events/1").then((res) => {
      // setevent(res.data);
      setEvent(eventsExamples[0]);
    });
    axios.get("http://localhost:3000/users/get/" + event?.owner_id).then((res) => {
      // setEvent(res.data);
      setUser(userExamples[0])
    });
  }, []);
  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "black", maxWidth: "100%" }}
      >
        <br></br>
        <div className="row">
          <div className="col">
            <img
              src={event?.event_pic_path}
              style={{ width: "50rem", height: "20rem" }}
            />
          </div>

          <div className="col">
            <p className="fs-1 fw-bold" style={{ color: "white" }}>
              {event?.title}
            </p>
            <p className="fs-2 fw-bold" style={{ color: "white" }}>
              Date: {event?.date.toLocaleDateString()}
            </p>
            <p className="fs-2 fw-bold" style={{ color: "white" }}>
              Owner: {user?.name}
            </p>
            <button type="button" className="btn btn-light btn-lg">
              <i className="bi bi-image"></i>
              &nbsp;&nbsp; Add Some Photos
            </button>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="row">
          <PhotosScreen photos={picturesExamples}></PhotosScreen>
        </div>
      </div>
    </>
  );
}

export default EventScreen;
