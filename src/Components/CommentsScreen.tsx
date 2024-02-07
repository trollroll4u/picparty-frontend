import React from "react";
import { CommentDatanew } from "../DataStructure.ts";
import CommentCard from "./commentCard.tsx";

interface CommentsProps {
  comments: CommentDatanew[];
}

function CommentsScreen({ comments }: CommentsProps) {
  return (
    <>
      <div className="container-fluid " key="commentsContainer" >
        <div className="row row-cols-1" key="Row">
          {comments &&
            comments.map((comment, index) => {
              if (comment.comment !== "") {
                return (
                  <div className="col" key={"col-" + index}>
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
