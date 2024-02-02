import React from "react";
import { CommentDatanew } from "../DataStructure.ts";
import CommentCard from "./commentCard.tsx";

interface CommentsProps {
  comments: CommentDatanew[];
}

function CommentsScreen({ comments }: CommentsProps) {
  return (
    <>
      <div className="container-fluid " id="eventsContainer">
        <div className="row row-cols-1" id="eventsRow">
          {comments &&
            comments.map((comment, index) => {
              if (comment.comment !== "") {
                return (
                  <div className="col" id={"col-" + index}>
                    <CommentCard comment={comment} />
                  </div>
                );
              }
            })}
        </div>
      </div>
    </>
  );
}

export default CommentsScreen;
