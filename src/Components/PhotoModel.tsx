import React, { useEffect } from "react";
import img1 from "../assets/party posters/Summer-Party-Poster-Template.jpg";
import { CommentDatanew, UserData } from "../DataStructure.ts";
import { useSelector } from "react-redux";
import { saveAs } from 'file-saver';

interface PhotoModelProps {
  photo: CommentDatanew;
  deleteComment: (comment_id: string) => void;
  closeModal: () => void;
}

function PhotoModel({ photo, deleteComment, closeModal }: PhotoModelProps) {
  const user = useSelector((state: UserData) => state.user);
  const [imageFileExtention, setImageFileExtention] =
    React.useState<string>("");

  const deletePhoto = (photoId: string) => {
    deleteComment(photoId);
    closeModal();
  };

  const downloadPhoto = (photo: string) => {
    if (!photo) {
      console.error("Base64 image string is empty");
      return;
    }

    // Remove data URL prefix if present
    const base64String = photo.replace(
      /^data:image\/(png|jpg|jpeg);base64,/,
      ""
    );
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "image/png" });
    console.log("blob", blob);
    

    saveAs(blob, "image.png");
  };

  React.useEffect(() => {
    setImageFileExtention(photo?.pic_file?.split(".")[1] || "");
  }, []);
  return (
    <>
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
            <img src={photo.pic_file} />
            <div className="modal-footer" style={{ backgroundColor: "black" }}>
              ({photo.user_id === user._id} &&
              {
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => deletePhoto(photo._id as string)}
                >
                  {
                    //TODO:  download the image from the server when available
                  }
                  Delete
                </button>
              }
              )
              <button
                type="button"
                className="btn btn-light"
                onClick={() => downloadPhoto(photo.pic_file as string)}
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
    </>
  );
}

export default PhotoModel;
