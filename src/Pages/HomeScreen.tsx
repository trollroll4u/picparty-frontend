import * as React from "react";
import EventsScreen from "../Components/EventsScreen.tsx";
import Carusale from "../Components/carouselImages.tsx";
import { EventData, CommentDatanew, UserData } from "../DataStructure.ts";
import { eventsExamples, picturesExamples } from "../examples.ts";
import { useState } from "react";
import { getAllEvents, CanceledError } from "../Services/event-service.ts";
import { getAllpictures } from "../Services/picture-service.ts";

export interface IAppProps {}

function HomeScreen(props: IAppProps) {
  const [events, setEvents] = useState<EventData[]>([]);
  const [pictures, setPictures] = useState<CommentDatanew[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserData | undefined>();
  const [error, setError] = useState<string>("");

  React.useEffect(() => {
    setEvents(eventsExamples);
    setPictures(picturesExamples);
    //**
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
    // pictureService.getAllPictures().then(({ request, abort }) => {
    //   setPictures(request.data);
    //   setLoading(false);
    // }).catch((err) => {
    //   if (err instanceof CanceledError) return;
    //   console.log(err);
    //   setLoading(false);
    // });

    return () => {
      // abort();
      console.log("clean up");
    };
  }, []);

  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "black", maxWidth: "100%" }}
      >
        {loading && <div className="spinner-border text-primary"> </div>}
        <div className="row">
          <Carusale images={pictures}></Carusale>
        </div>
        <br></br>
        <div className="row">
          <EventsScreen events={events}></EventsScreen>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
