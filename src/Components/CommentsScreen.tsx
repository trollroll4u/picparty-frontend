import { CommentDatanew } from "../DataStructure.ts";
import CommentCard from "./CommentCard.tsx";

interface CommentsProps {
  comments: CommentDatanew[];
  deleteComment: (comment_id: string) => void;
}

function CommentsScreen({ comments, deleteComment}: CommentsProps) {
  
  return (
    <>
      <div className="container-fluid " key="commentsContainer" >
        <div className="row row-cols-1" key="Row">
          {comments &&
            comments.map((comment, index) => {
              if (comment.comment !== "") {
                return (
                  <div className="col" key={"col-" + index}>
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
