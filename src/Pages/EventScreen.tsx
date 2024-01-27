import * as React from "react";
import { EventData, PictureData } from "../DataStructure.ts";
import PhotosScreen from "../Components/PhotosScreen.tsx";
import { eventsExamples, picturesExamples } from "../examples.ts";
import { useState } from "react";

export interface IAppProps {}

function EventScreen(props: IAppProps) {
  const [a, seta] = useState<EventData>();
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
              src={eventsExamples[3].event_pic}
              style={{ width: "40rem", height: "20rem" }}
            />
          </div>
          
          <div className="col">
            <p className="fs-1 fw-bold" style={{ color: "white" }}>
              {eventsExamples[0].title}
            </p>
            <p className="fs-2 fw-bold" style={{ color: "white" }}>
              Date: {eventsExamples[0].date.toLocaleDateString()}
            </p>
            <p className="fs-2 fw-bold" style={{ color: "white" }}>
              Owner: {eventsExamples[0].owner}
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
