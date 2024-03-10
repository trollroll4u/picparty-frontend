import * as React from "react";
import EventsScreen from "../Components/EventsScreen.tsx";
import { UserData } from "../DataStructure.ts";
import { useState } from "react";
import PhotosScreen from "../Components/PhotosScreen.tsx";
import { useDispatch, useSelector } from "react-redux";

import { useAuth0 } from "@auth0/auth0-react";
import { createUser, getAllUsers } from "../Services/user-service.ts";
import { login } from "../app/user.ts";
import { defaultPic } from "../assets/default_profile.ts";

export interface IAppProps {}

function ProfileScreen() {
  const { user, isAuthenticated } = useAuth0();
  const [loading] = useState<boolean>(false);
  const dbUser = useSelector((state: UserData) => state.user);
  const dispatch = useDispatch();
  const [,setImageFileExtention] =
    React.useState<string>("");

    
      
  const convertImageToBase64 = (imageUrl: string) => {
    return new Promise<string>((resolve, reject) => {
      fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64String = reader.result as string;
            resolve(base64String);
          };
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
        .catch(error => reject(error));
    });
  };
  
  const addUser = async (image: string) => {
    const newUser: UserData = {
      name: (user?.name === user?.email ? user?.nickname : user?.name) || "" ,
      email: user?.email || "",
      password: "aaaa",
      profile_pic_file: image,
      events: [],
      pictures: [],
      comments: [],
      likes: [],
    }
    try {
      console.log(newUser);
      const res = await createUser(newUser);
      dispatch(login(newUser))
      console.log(res);
    } catch (error) {
      console.log("here ohad");
      console.log("Error creating event: " + error);
    }
  }

  React.useEffect(() => {

    const handleUser = async () => {
      if (user && user.picture) {
        convertImageToBase64(user.picture).then(async (base64String) => {
          addUser(base64String);
        }).catch(() => addUser(defaultPic)
        );
      } else {
        addUser(defaultPic)
      }
    }
    getAllUsers().then((resultArray) => {
      if (isAuthenticated) {
        const existingUser = resultArray.find((dbUser) => dbUser.email === user?.email);
        console.log(existingUser)
        if(!existingUser) {
          handleUser()
        } else {
          console.log(existingUser)
          dispatch(login(existingUser))
        }
      }
    })

    setImageFileExtention(dbUser.profile_pic_file?.split(".")[1] || "");

    return () => {
      console.log("clean up");
    };
  }, []);

  return (
    isAuthenticated && (
      <>
        <div
          className="container-fluid text-center"
          style={{ backgroundColor: "black", maxWidth: "100%", height: "100vh" }}
        >
          {loading && <div className="spinner-border text-primary"> </div>}
          <div className="row">
            <h1 style={{ color: "white" }}> Hello {dbUser.name}!</h1>
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
                  dbUser.profile_pic_file
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
          {/* <p className="d-inline-flex gap-1">
            <button className="btn btn-light fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              <i className="bi bi-person-circle"></i>
                &nbsp; Edit Profile
            </button>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
              Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
          </div>

          <p className="d-inline-flex gap-1">
            <button className="btn btn-primary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              Button with data-bs-target
            </button>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
              Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
          </div> */}

          <div className="row" style={{ backgroundColor: "black" }}>
            <h1 style={{ color: "white" }}> My Uploads</h1>
            <PhotosScreen photos={dbUser.pictures} deleteComment={function (): void {
              throw new Error("Function not implemented.");
            } }></PhotosScreen>
          </div>
          <div className="row" style={{ backgroundColor: "black" }}>
            <h1 style={{ color: "white" }}> My events</h1>
            <EventsScreen events={dbUser.events}></EventsScreen>
          </div>
        </div>
      </>
    )
  );
}

export default ProfileScreen;
