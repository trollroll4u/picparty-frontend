import * as React from "react";
import EventsScreen from "../Components/EventsScreen.tsx";
import Carusale from "../Components/carouselImages.tsx";
import { EventData, CommentDatanew, UserData } from "../DataStructure.ts";
import { eventsExamples, picturesExamples } from "../examples.ts";
import { useState } from "react";
import { getAllEvents, CanceledError } from "../Services/event-service.ts";
import { getPictureComments } from "../Services/comment-service.ts";
import { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";

export interface IAppProps {}

function HomeScreen(props: IAppProps) {
  const [events, setEvents] = useState<EventData[]>([]);
  const [pictures, setPictures] = useState<CommentDatanew[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const user = useSelector((state: UserData) => state.user);
  const [error, setError] = useState<string>("");

  React.useEffect(() => {
    // setEvents(eventsExamples);
    // setPictures(picturesExamples);
    //**

    const fetchEvents = async () => {
      try {
        const events = await getAllEvents();
        setEvents(events);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching events: " + error);
        setLoading(false);
      }
    };
    const fetchPictures = async () => {
      try {
        const pictures = await getPictureComments();
        setPictures(pictures);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching pictures: " + error);
        setLoading(false);
      }
    };
    setLoading(true);
    fetchEvents();
    fetchPictures();

    return () => {
      // console.log("clean up");
    };
  }, []);

  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "black", maxWidth: "100%" }}
        key="home-container"
      >
        {loading && (
          <div className="spinner-border text-primary" key="home-loading">
            {" "}
          </div>
        )}
        <div className="row" key="carusele-row">
          <Carusale images={pictures}></Carusale>
        </div>
        <br></br>
        <div className="row" key="events-row-home">
          <EventsScreen events={events}></EventsScreen>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
