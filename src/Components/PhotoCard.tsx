import React from "react";
import img1 from "../assets/party posters/Summer-Party-Poster-Template.jpg";
import { PictureData } from "../DataStructure.ts";


interface EventProps {
  photo: PictureData;
}

function PhotoCard({ photo }: EventProps) {
  return (
    <div className="card mx-1 my-2" key={"card-" + photo.id}>
      <img
        key={"card-img-" + photo.id}
        className="card-img-top"
        src={photo.path || img1}
        style={{ height: "10rem", width: "100%" }}
      />
      {/* <div
        className="card-body"
        key={"card-body-" + photo.id}
        style={{ display: "inline" }}
      >
        <p className="d-md-inline">
          <i className="bi bi-heart"></i>
          &nbsp;
          {photo. likes.length}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <i className="card-text bi bi-chat" />
          &nbsp;
          {photo.comments.length}
        </p>
      </div> */}
    </div>
  );
}

export default PhotoCard;
