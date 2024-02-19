import * as React from "react";
import EventsScreen from "../Components/EventsScreen.tsx";
import Carusale from "../Components/carouselImages.tsx";
import { EventData, CommentDatanew, UserData } from "../DataStructure.ts";
import { eventsExamples, picturesExamples, userExamples } from "../examples.ts";
import { useState } from "react";
import { getEventByUser } from "../Services/event-service.ts";
import { getAllpictures } from "../Services/picture-service.ts";
import {
  getMessageCommentsByUser,
  getPictureCommentsByUser,
} from "../Services/comment-service.ts";
import PhotosScreen from "../Components/PhotosScreen.tsx";
import { useSelector } from "react-redux";

export interface IAppProps {}

function ProfileScreen(props: IAppProps) {
  const [events, setEvents] = useState<EventData[]>();
  const [pictures, setPictures] = useState<CommentDatanew[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const user = useSelector((state: UserData) => state.user);
  const [error, setError] = useState<string>("");
  const [imageFileExtention, setImageFileExtention] =
    React.useState<string>("");

  React.useEffect(() => {
    // setEvents(eventsExamples);
    // setPictures(picturesExamples);
    //**

    // get the userfrom redux

    const fetchEventsByUser = async (id: string) => {
      try {
        const events = await getEventByUser("65c28f044145861695700968");
        setEvents(events);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching events: " + error);
        setLoading(false);
      }
    };
    const fetchPicturesByUser = async (id: string) => {
      try {
        const pictures = await getPictureCommentsByUser(
          "65c28f044145861695700968"
        );
        setPictures(pictures);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching pictures: " + error);
        setLoading(false);
      }
    };

    const fetchCommentsByUser = async (id: string) => {
      try {
        const comments = await getMessageCommentsByUser(
          "65c28f044145861695700968"
        );
        setPictures(comments);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching comments: " + error);
        setLoading(false);
      }
    };
    // setLoading(true);
    // fetchEventsByUser("00000");
    // fetchPicturesByUser("00000");
    // fetchCommentsByUser("00000");
    setImageFileExtention(user.profile_pic_file?.split(".")[1] || "");

    return () => {
      console.log("clean up");
    };
  }, []);

  return (
    <>
      <div
        className="container-fluid text-center"
        style={{ backgroundColor: "black", maxWidth: "100%", height: "100vh" }}
      >
        {loading && <div className="spinner-border text-primary"> </div>}
        <div className="row">
          <h1 style={{ color: "white" }}> Hello {user.name}!</h1>
          <p style={{ color: "white" }}>
            add rounded image, and copy from the sign up page so it will display
            the details and give the user the oppertunity ti chabge them, like
            in getin
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 ">
            <img
              src={
               user.profile_pic_file
              }
              alt="Profile Avatar"
              className="rounded-circle mb-3"
              style={{ width: "15rem", height: "15rem" }}
            ></img>
          </div>
        </div>
        <div className="row">
          <h1 style={{ color: "white" }}> sign up form</h1>
          <p style={{ color: "white" }}>
            copy from the sign up page so it will display the details and give
            the user the oppertunity ti change them, like in getin
          </p>
        </div>

        <div className="row" style={{ backgroundColor: "black" }}>
          <h1 style={{ color: "white" }}> My Uploads</h1>
          <PhotosScreen photos={user.pictures}></PhotosScreen>
        </div>
        <div className="row" style={{ backgroundColor: "black" }}>
          <h1 style={{ color: "white" }}> My events</h1>
          <EventsScreen events={user.events}></EventsScreen>
        </div>
      </div>
    </>
  );
}

export default ProfileScreen;
