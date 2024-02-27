import React, { useState } from "react";
import img1 from "../assets/party posters/Summer-Party-Poster-Template.jpg";
import { CommentDatanew, UserData } from "../DataStructure.ts";
import { getUser } from "../Services/user-service.ts";
import { userExamples } from "../examples.ts";
import { useSelector } from "react-redux";
import { CanceledError, deleteComment } from "../Services/comment-service.ts";

interface CommentProps {
  comment: CommentDatanew;
  deleteComment: (comment_id: string) => void;
}

function CommentCard( {comment, deleteComment} : CommentProps) {
  const [owner, setOwner] = useState<UserData>();
  const user = useSelector((state: UserData) => state.user);

  React.useEffect(() => {
    console.log("comment", comment);
    // Get owner user by id
    const fetchOwnerUser = async (owner_id: string) => {
      try {
        await getUser(owner_id).then((res) => {
          setOwner(res);
        });
      } catch (error) {
        console.log("Error fetching owner: " + error);
      }
    };
    fetchOwnerUser(comment.user_id as string);
  }, []);
  return (
    <div className="card mx-1 my-2" key={"card-" + comment._id}>
      <div
        className="card-body"
        key={"card-body-" + comment._id}
        style={{ display: "inline" }}
      >
        <p className="d-md-inline fs-6">
          <span className="fw-bold fs-6"> {owner?.name}</span> {comment.comment}
          {user._id === comment.user_id && (
            <span className="d-flex justify-content-end">
              <button
                className="btn btn-outline-dark"
                onClick={() => deleteComment(comment._id as string)}
              >
                <i className="bi bi-trash"></i>
              </button>
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

export default CommentCard;
