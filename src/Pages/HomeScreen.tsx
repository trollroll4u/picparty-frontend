import * as React from "react";
import EventsScreen from "../Components/EventsScreen.tsx";
import Carusale from "../Components/carouselImages.tsx";
import { EventData, PictureData } from "../DataStructure.ts";
import { eventsExamples, picturesExamples } from "../examples.ts";

export interface IAppProps {}

function HomeScreen(props: IAppProps) {
  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "black", maxWidth: "100%" }}
      >
        <div className="row">
          <Carusale images={picturesExamples}></Carusale>
        </div>
        <br></br>
        <div className="row">
          <EventsScreen events={eventsExamples}></EventsScreen>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
