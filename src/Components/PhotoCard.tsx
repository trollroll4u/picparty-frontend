import React from "react";
import img1 from "../assets/party posters/Summer-Party-Poster-Template.jpg";
import { CommentDatanew } from "../DataStructure.ts";

interface PhotoProps {
  photo: CommentDatanew;
}

function PhotoCard({ photo }: PhotoProps) {
  return (
    <>
      <div className="card mx-1 my-2" key={"card-" + photo.id}>
        <img
          key={"card-img-" + photo.id}
          className="card-img-top"
          src={photo.picture_path || img1}
          style={{ height: "10rem", width: "100%" }}
          onClick={() => {
            console.log("clicked");
          }}
          data-bs-toggle="modal"
          data-bs-target="#ImageModal"
        />
      </div>
 
      {/* model code  */}
      <div
        className="modal fade"
        id="ImageModal"
        tabIndex={Number("-1")}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <img src={photo.picture_path}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotoCard;
