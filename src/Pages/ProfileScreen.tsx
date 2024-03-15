import * as React from "react";
import EventsScreen from "../Components/EventsScreen.tsx";
import { UserData } from "../DataStructure.ts";
import { useState } from "react";
import PhotosScreen from "../Components/PhotosScreen.tsx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { createUser, getAllUsers } from "../Services/user-service.ts";
import { login } from "../app/user.ts";
import { defaultPic } from "../assets/default_profile.ts";

export interface IAppProps {}

function ProfileScreen() {
  const navigate = useNavigate();
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
      password: "",
      profile_pic_file: image,
      events: [],
      pictures: [],
      comments: [],
      likes: [],
    }
    try {

      const res = await createUser(newUser);
      dispatch(login(res))

    } catch (error) {
      console.log("Error creating event: " + error);
    }
  }

  const editUserPage = (dbUser: UserData) => {
    navigate("/editUser/" + dbUser._id, { state: { dbUser: dbUser } });
  };

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
        if(!existingUser) {
          handleUser()
        } else {
          dispatch(login(existingUser))
        }
      }
    })

    setImageFileExtention(dbUser.profile_pic_file?.split(".")[1] || "");

    return () => {
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
          <br/> 
	  <button
            type="button"
            className="btn btn-light btn-lg"
            onClick={() => editUserPage(dbUser)}
          >
            <i className="bi bi-pencil-fill"></i>
            &nbsp;&nbsp; Edit user details
          </button>
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
