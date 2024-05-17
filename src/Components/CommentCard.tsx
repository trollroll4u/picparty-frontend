import { CommentDatanew } from "../DataStructure.ts";

interface CommentProps {
  comment: CommentDatanew;
  deleteComment: (comment_id: number) => void;
}

function CommentCard({ comment, deleteComment }: CommentProps) {
  return (
    <div className="card mx-1 my-2" key={"card-" + comment?.commentId}>
      <div
        className="card-body"
        key={"card-body-" + comment?.commentId}
        style={{ display: "inline" }}
      >
        <p className="d-md-inline fs-6">
          <span className="fw-bold fs-6"> {comment?.userName}</span>{" "}
          {comment.comment}
          <span className="d-flex justify-content-end">
            <button
              className="btn btn-outline-dark"
              onClick={() => {
                deleteComment(comment?.commentId as number);
              }}
            >
              <i className="bi bi-trash"></i>
            </button>
          </span>
        </p>
      </div>
    </div>
  );
}

export default CommentCard;
