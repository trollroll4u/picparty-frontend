import * as React from "react";
import EventsScreen from "../Components/EventsScreen.tsx";
import Carusale from "../Components/carouselImages.tsx";
import { EventData, CommentDatanew, UserData } from "../DataStructure.ts";
import { eventsExamples, picturesExamples } from "../examples.ts";
import { useState } from "react";
import { getAllEvents, CanceledError } from "../Services/event-service.ts";
import { getPictureComments } from "../Services/comment-service.ts";

export interface IAppProps {}

function HomeScreen(props: IAppProps) {
  const [events, setEvents] = useState<EventData[]>([]);
  const [pictures, setPictures] = useState<CommentDatanew[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserData>();
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
    }
    setLoading(true);
    fetchEvents();
    fetchPictures()
    

    // const { request: eventRequest, abort: eventAbort } = getAllEvents();
    // eventRequest.then((res: { data: EventData[] }) => {
    //   setEvents(res.data);
    //   setLoading(false);
    // });
    // eventRequest.catch((err: any) => {
    //   if (err.name === "AbortError") {
    //     console.log("CanceledError");
    //   } else if (err instanceof CanceledError) {
    //     return;
    //   } else {
    //     // console.log(err);
    //     setLoading(false);
    //   }
    // });


    // const { request: picRequest, abort: picAbort } = getPictureComments();
    // picRequest
    //   .then((res: { data: CommentDatanew[] }) => {
    //     setPictures(res.data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     if (err instanceof CanceledError) {
    //       return;
    //     } else {
    //       console.log(err);
    //       setLoading(false);
    //     }
    //   });

    return () => {
      console.log("clean up");
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
