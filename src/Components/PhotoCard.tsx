import React, { useEffect } from "react";
import img1 from "../assets/party posters/Summer-Party-Poster-Template.jpg";
import { CommentDatanew } from "../DataStructure.ts";

interface PhotoProps {
  photo: CommentDatanew;
}

function PhotoCard({ photo }: PhotoProps) {
  const [selectedPhoto, setSelectedPhoto] = React.useState("");
  const [imageFileExtention, setImageFileExtention] = React.useState<string>("");

  const openModal = (photo: any) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto("");
  };
  React.useEffect(() => {
    setImageFileExtention(photo?.pic_file?.split(".")[1] || "");
  }, []);
  return (
    <>
      <div className="card mx-1 my-2" key={"card-" + photo._id}>
        <img
          key={"card-img-" + photo._id}
          className="card-img-top"
          src={`data:image/${imageFileExtention};base64,` + photo.pic_file}
          style={{ height: "10rem", width: "100%", cursor: "pointer" }}
          onClick={() => {
            openModal(`data:image/${imageFileExtention};base64,` + photo.pic_file);
          }}
        />
      </div>
      {selectedPhoto !== "" && (
        <div
          className="modal fade show"
          tabIndex={Number("-1")}
          role="dialog"
          style={{ display: "block" }}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <img src={selectedPhoto} />
              <div
                className="modal-footer"
                style={{ backgroundColor: "black" }}
              >
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={closeModal}
                >
                  {
                    //TODO:  download the image from the server when available
                  }
                  Download
                </button>
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PhotoCard;
