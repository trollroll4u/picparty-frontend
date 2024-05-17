import { CommentDatanew } from "../DataStructure.ts";
import CommentCard from "./CommentCard.tsx";

interface CommentsProps {
  comments: CommentDatanew[];
  deleteComment: (comment_id: number) => void;
}

function CommentsScreen({ comments, deleteComment}: CommentsProps) {
  
  return (
    <>
      <div className="container-fluid " key="commentsContainer" style={{backgroundColor: "black"}}>
        <div className="row row-cols-1" key="Row" style={{backgroundColor: "black"}}>
          {comments &&
            comments.map((comment, index) => {
              if (comment.comment !== "") {
                return (
                  <div className="col" key={"col-" + index} style={{backgroundColor: "black"}}>
                    <CommentCard comment={comment} deleteComment={deleteComment} />
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
