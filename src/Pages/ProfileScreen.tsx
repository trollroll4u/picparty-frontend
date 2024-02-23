import * as React from "react";
import EventsScreen from "../Components/EventsScreen.tsx";
import { EventData, CommentDatanew, UserData } from "../DataStructure.ts";
import { useState } from "react";
import PhotosScreen from "../Components/PhotosScreen.tsx";
import { useSelector } from "react-redux";

export interface IAppProps {}

function ProfileScreen(props: IAppProps) {

  const [loading, setLoading] = useState<boolean>(false);
  const user = useSelector((state: UserData) => state.user);
  const [error, setError] = useState<string>("");
  const [imageFileExtention, setImageFileExtention] =
    React.useState<string>("");

  React.useEffect(() => {

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
