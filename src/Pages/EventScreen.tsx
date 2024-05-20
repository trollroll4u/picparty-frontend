import * as React from "react";
import { CommentDatanew } from "../DataStructure.ts";
import { ChangeEvent, useState } from "react";
import { CanceledError } from "../Services/event-service.ts";
import CommentsScreen from "../Components/CommentsScreen.tsx";
import {
  createComment,
  deleteComment,
  getAllComments,
} from "../Services/comment-service.ts";

function EventScreen() {
  // States
  const [nameValue, setNameValue] = useState("");
  const [commentValue, setCommentValue] = useState("");
  const [comments, setComments] = useState<CommentDatanew[]>([]);

  // Functions
  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommentValue(e.target.value);
  };
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };

  const onCommentEventButton = async (name: string, comment: string) => {
    if (comment === "" || name === "") {
      return;
    } else {
      setNameValue("");
      setCommentValue("");
      const newComment: CommentDatanew = {
        comment: comment,
        userName: name,
      };
      try {
        await createComment(newComment).then(async () => {
          setTimeout(() => {}, 500);
          await getAllComments().then((res) => {
            setComments(res);
          });
        });
      } catch (error) {
        if (error instanceof CanceledError) {
          console.log("Request canceled");
        } else {
          console.log("Error creating comment: " + error);
        }
      }
    }
  };

  const onDeleteComment = async (commentIDToDelete: number) => {
    try {
      await deleteComment(commentIDToDelete as number);
      setTimeout(() => {}, 500);
      await getAllComments().then((res) => {
        setComments(res);
      });
    } catch (error) {
      if (error instanceof CanceledError) {
        console.log("Request canceled");
      } else {
        console.log("Error deleting comment: " + error);
      }
    }
  };

  // UseEffects
  React.useEffect(() => {
    const fetchComments = async () => {
      await getAllComments().then((res) => {
        setComments(res);
        console.log("comments after fetch: ", comments);
      });
    };
    fetchComments();
    return () => {};
  }, [comments.length]);
  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "black", maxWidth: "100%", height: "100vh" }}
      >
        <br></br>
        <h1 className="text-center text-light">
          THE BEST WEBSITE IN THE WORLD{" "}
        </h1>
        <p className="text-center text-light">
          created by ohad albagly and yuval ron
        </p>
        <div>
          <div className="row text-center" style={{ backgroundColor: "black" }}>
            <div className="col">
              <div className="row">
              <img
                // src="https://picsum.photos/200/300"
                src="https://images.nymag.com/images/2/daily/2010/02/20100202_himym_560x375.jpg"
                style={{ width: "50rem", height: "30rem" }}
              />
              </div>
              <div className="row" style={{ backgroundColor: "black" }}>
                <h1 className="text-light">Add new comment</h1>
              <form className="row g-1">
                <div className="row">
                  <input
                    type="text"
                    style={{ width: "50vw", margin: "auto" }}
                    className="form-control form-control-md"
                    placeholder="Write your Name..."
                    value={nameValue}
                    onChange={handleNameChange}
                  />
                </div>
                <h1></h1>
                <div className="row">
                  <input
                    type="text"
                    style={{ width: "50vw", margin: "auto" }}
                    className="form-control form-control-md"
                    placeholder="Add your comment..."
                    value={commentValue}
                    onChange={handleCommentChange}
                  />
                </div>
                <h1></h1>
                <div
                  className="row"
                  style={{
                    width: "20vh",
                    margin: "auto",
                    backgroundColor: "black",
                  }}
                >
                  <button
                    type="button"
                    className="btn btn-light btn-md mb-3"
                    onClick={
                      () => onCommentEventButton(nameValue, commentValue) //TODO:  change to send current user
                    }
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            </div>
            <div
              className="col"
              style={{ width: "50%", backgroundColor: "black", alignContent:"center", margin: "center" }}
            >
              <CommentsScreen
                comments={comments}
                deleteComment={onDeleteComment}
              ></CommentsScreen>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default EventScreen;
