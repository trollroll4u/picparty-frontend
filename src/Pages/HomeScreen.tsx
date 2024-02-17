import * as React from "react";
import EventsScreen from "../Components/EventsScreen.tsx";
import Carusale from "../Components/carouselImages.tsx";
import { EventData, CommentDatanew, UserData } from "../DataStructure.ts";
import { useState } from "react";
import { getAllEvents } from "../Services/event-service.ts";
import { getPictureComments } from "../Services/comment-service.ts";
import { useSelector } from "react-redux";

export interface IAppProps {}

function HomeScreen(props: IAppProps) {
  const [events, setEvents] = useState<EventData[]>([]);
  const [pictures, setPictures] = useState<CommentDatanew[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  React.useEffect(() => {
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
        <br></br>
        {loading && (
          <div
            className="spinner-border text-primary text-center"
            key="home-loading"
          >
            {" "}
          </div>
        )}
        {pictures.length > 0 && (
          <div className="row" key="carusele-row">
            <Carusale images={pictures}></Carusale>
          </div>
        )}

        {!loading && events.length === 0 && pictures.length === 0 && (
          <div
            className="alert alert-danger text-center"
            role="alert"
            key="home-error"
          >
            {" "}
            <h1>There are no events or pictures</h1>{" "}
          </div>
        )}
        <br></br>
        <div className="row" key="events-row-home">
          <EventsScreen events={events}></EventsScreen>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
