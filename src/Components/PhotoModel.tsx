import React, { useEffect, useState } from "react";
import img1 from "../assets/party posters/Summer-Party-Poster-Template.jpg";
import { EventData, UserData } from "../DataStructure.ts";
import { getUser, CanceledError } from "../Services/user-service.ts";
import { userExamples } from "../examples.ts";

interface EventProps {
  photo: string;
}

function PhotoModel({ photo }: string) {
  const [user, setUser] = useState<UserData>();

  useEffect(() => {
    return () => {
      console.log("clean up");
    };
  }, []);

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={Number("-1")}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotoModel;

// <!-- Button trigger modal -->
// <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//   Launch demo modal
// </button>
