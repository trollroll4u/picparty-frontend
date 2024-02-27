import React, { useEffect } from "react";
import img1 from "../assets/party posters/Summer-Party-Poster-Template.jpg";
import { CommentDatanew, UserData } from "../DataStructure.ts";
import { useSelector } from "react-redux";
import PhotoModel from "./PhotoModel.tsx";

interface PhotoProps {
  photo: CommentDatanew;
  deleteComment: (comment_id: string) => void;
}

function PhotoCard({ photo, deleteComment }: PhotoProps) {
  const [selectedPhoto, setSelectedPhoto] = React.useState("");
  // const user = useSelector((state: UserData) => state.user);
  // const [imageFileExtention, setImageFileExtention] =
  //   React.useState<string>("");

  const openModal = (photo: any) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto("");
  };
  // React.useEffect(() => {
  //   setImageFileExtention(photo?.pic_file?.split(".")[1] || "");
  //   console.log("photo", photo);
  // }, []);
  return (
    <>
      <div className="card mx-1 my-2" key={"card-" + photo._id}>
        <img
          key={"card-img-" + photo._id}
          className="card-img-top"
          src={photo.pic_file}
          style={{ height: "10rem", width: "100%", cursor: "pointer" }}
          onClick={() => {
            openModal(photo.pic_file);
          }}
        />
      </div>
      {selectedPhoto !== "" && (
        <PhotoModel
          photo={photo}
          deleteComment={deleteComment}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default PhotoCard;
