import * as React from "react";
import { CommentDatanew, EventData, UserData } from "../DataStructure.ts";
import PhotosScreen from "../Components/PhotosScreen.tsx";
import { ChangeEvent, useRef, useState } from "react";
import { getEvent, CanceledError } from "../Services/event-service.ts";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../Services/user-service.ts";
import CommentsScreen from "../Components/CommentsScreen.tsx";
import { createComment, deleteComment } from "../Services/comment-service.ts";
import { useSelector } from "react-redux";
import { convertImageToBase64 } from "./CreateScreen.tsx";
import { deleteEvent } from "../Services/event-service.ts";

function EventScreen() {
  // States
  const navigate = useNavigate();
  const eventId = useParams();
  const [commentValue, setCommentValue] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [event, setEvent] = useState<EventData>();
  const user = useSelector((state: UserData) => state.user);
  const [owner, setOwner] = useState<UserData>();
  const [imgSrc, setImgSrc] = useState<string>("");
  const [, setImageFileExtention] = useState<string>("");

  // Functions
  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommentValue(e.target.value);
  };
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imgSelected = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("im here imgSelected");
    if (e.target.files && e.target.files.length > 0) {
      console.log("Image selected");
      convertImageToBase64(e.target.files[0] as File).then(
        async (base64String) => {
          setImgSrc(base64String);
          console.log("imgSrc: " + imgSrc);
          const newPic: CommentDatanew = {
            like: false,
            user_id: user?._id,
            event_id: event?._id as string,
            comment: "",
            pic_file: base64String,
          };
          console.log("try to publish new pic: ", newPic);
          try {
            await createComment(newPic);
            console.log("try to fetch event after add pic: " + event?._id);
            setTimeout(() => {}, 500);
            await getEvent(event?._id as string).then((res) => {
              setEvent(res);
            });
          } catch (error) {
            if (error instanceof CanceledError) {
              console.log("Request canceled");
            } else {
              console.log("Error creating pic: " + error);
            }
          }
        }
      );
    }
  };
  const selectImg = async () => {
    console.log("Selecting image...");
    fileInputRef.current?.click();
  };

  const onLikeEventButton = async (event: EventData, user: UserData) => {
    if (
      event?.likes.find(async (like) => like.user_id == user._id) != undefined
    ) {
      try {
        const found: CommentDatanew = event?.likes.find(
          (like) => like.user_id == user._id
        ) as CommentDatanew;
        console.log("unlike event number: " + event._id);
        await deleteComment(found._id as string);
        setTimeout(() => {}, 500);
        console.log("try to fetch event after unlike: " + event._id);
        setTimeout(() => {}, 500);
        setEvent(await getEvent(event._id as string));
      } catch (error) {
        if (error instanceof CanceledError) {
          console.log("Request canceled");
        } else {
          console.log("Error deleting like: " + error);
        }
      }
    } else {
      console.log("like event number: " + event._id);
      const newLike: CommentDatanew = {
        like: true,
        user_id: user?._id as string,
        event_id: event?._id as string,
        comment: "",
        pic_file: "",
      };
      // create like in db
      try {
        await createComment(newLike);
        console.log("try to fetch event after like: " + event._id);
        setTimeout(() => {}, 500);
        await getEvent(event._id as string).then((res) => {
          setEvent(res);
        });
      } catch (error) {
        if (error instanceof CanceledError) {
          console.log("Request canceled");
        } else {
          console.log("Error creating like: " + error);
        }
      }
    }
  };

  const onCommentEventButton = async (
    event: EventData,
    user: UserData,
    comment: string
  ) => {
    if (comment === "") {
      return;
    } else {
      setCommentValue("");
      const newComment: CommentDatanew = {
        comment: comment,
        user_id: user?._id as string,
        event_id: event?._id as string,
        like: false,
        pic_file: "",
      };
      console.log("try to publish new comment: " + newComment);
      try {
        await createComment(newComment).then(() => {
          console.log("try to fetch event after like: " + event._id);
          setTimeout(() => {}, 500);
          getEvent(event._id as string).then((res) => {
            setEvent(res);
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

  const fillLikeIcon = (event: EventData, user_id: string) => {
    const found = event?.likes.find((like) => like.user_id == user_id);
    if (found !== undefined) {
      return <i className="bi bi-heart-fill" style={{ color: "red" }}></i>;
    } else {
      return <i className="bi bi-heart"></i>;
    }
  };

  const onDeleteComment = async (commentIDToDelete: string) => {
    console.log("comment: ");
    console.log(commentIDToDelete);
    try {
      await deleteComment(commentIDToDelete as string);
      setTimeout(() => {}, 500);
      await getEvent(event?._id as string).then((res) => {
        setEvent(res);
      });
    } catch (error) {
      if (error instanceof CanceledError) {
        console.log("Request canceled");
      } else {
        console.log("Error deleting comment: " + error);
      }
    }
  };

  const editEventPage = (event: EventData) => {
    navigate("/editEvent/" + event._id, { state: { event: event } });
  };
  const deleteCurrentEvent = async (event: EventData) => {
    try {
      await deleteEvent(event._id as string);
      navigate("/");
    } catch (error) {
      if (error instanceof CanceledError) {
        console.log("Request canceled");
      } else {
        console.log("Error deleting event: " + error);
      }
    }
  };

  // UseEffects
  React.useEffect(() => {
    // Get owner user by id
    const fetchOwnerUser = async (owner_id: string) => {
      try {
        console.log("fetching owner: " + owner_id);
        await getUser(owner_id).then((res) => {
          setOwner(res);
        });
      } catch (error) {
        console.log("Error fetching owner: " + error);
      }
    };

    // Get event by id
    const fetchEvent = async (event_id: string) => {
      try {
        await getEvent(event_id).then((res) => {
          console.log("event fetched: ");
          console.log(res);
          setEvent(res);
          fetchOwnerUser(res.user_id);
          setLoading(false);
        });
      } catch (error) {
        console.log("Error fetching event: " + error);
        setLoading(false);
      }
    };
    console.log("fetching event: " + eventId.eventId);
    setLoading(true);
    fetchEvent(eventId.eventId as string);
    setImageFileExtention(event?.event_pic_file?.split(".")[1] || "");

    return () => {};
  }, [event?.comments.length, event?.likes.length, event?.pictures.length]);
  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "black", maxWidth: "100%", height: "100vh" }}
      >
        <br></br>
        {loading && (
          <div
            className="spinner-border text-primary text-center"
            key="home-loading"
          >
            {" "}
          </div>
        )}

        {event && user && owner && (
          <div>
            <div className="row text-center">
              <div className="col">
                <img
                  src={event.event_pic_file}
                  style={{ width: "50rem", height: "30rem" }}
                />
              </div>

              <div className="col">
                <p className="fs-2 fw-bold" style={{ color: "white" }}>
                  {event?.title}
                </p>

                <p
                  className="fs-5 fw-bold text-break"
                  style={{ color: "white" }}
                >
                  {event?.description}
                </p>
                <p className="fs-5 fw-bold" style={{ color: "white" }}>
                  Date: {event?.date.toLocaleDateString()}
                </p>
                <p className="fs-5 fw-bold" style={{ color: "white" }}>
                  Owner: {owner?.name}
                </p>
                <p className="fs-3 fw-bold" style={{ color: "white" }}>
                  <i className="bi bi-heart"></i> {event?.likes.length}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i className="bi bi-chat"></i> {event?.comments.length}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i className="bi bi-image"></i> {event?.pictures?.length}
                </p>
                <button
                  type="button"
                  className="btn btn-light btn-lg"
                  onClick={() => {
                    selectImg();
                  }}
                >
                  <i className="bi bi-image"></i>
                  &nbsp;&nbsp; Add Some Photos
                </button>
                <input
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  type="file"
                  onChange={imgSelected}
                ></input>
                <button
                  type="button"
                  className="btn btn-light btn-lg"
                  style={{ margin: "1rem" }}
                  onClick={(clickEvent) => {
                    clickEvent.preventDefault();
                    onLikeEventButton(event, user);
                  }} //TODO:  change to send current user
                >
                  {
                    fillLikeIcon(event, user._id) //TODO:  change to send current user
                  }
                  &nbsp;&nbsp; Like
                </button>

                {user._id === event.user_id && (
                  <div className="row text-center">
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-light btn-lg"
                        onClick={() => deleteCurrentEvent(event)}
                        style={{ margin: "1rem" }}
                      >
                        <i className="bi bi-trash"></i>
                        &nbsp;&nbsp; Delete
                      </button>
                      <button
                        type="button"
                        className="btn btn-light btn-lg"
                        onClick={() => editEventPage(event)}
                      >
                        <i className="bi bi-pencil-fill"></i>
                        &nbsp;&nbsp; Edit event details
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="row">
              <PhotosScreen
                photos={event?.pictures}
                deleteComment={onDeleteComment}
              ></PhotosScreen>
            </div>
            <div
              className="row "
              style={{ width: "50%", backgroundColor: "black" }}
            >
              <CommentsScreen
                comments={event.comments}
                deleteComment={onDeleteComment}
              ></CommentsScreen>
            </div>
            <div className="row">
              <form className="row g-3">
                <div className="col">
                  <input
                    type="text"
                    style={{ width: "50vw", margin: "auto" }}
                    className="form-control form-control-md"
                    placeholder="Add your comment..."
                    value={commentValue}
                    onChange={handleCommentChange}
                  />
                </div>
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-light btn-md mb-3"
                    onClick={
                      () => onCommentEventButton(event, user, commentValue) //TODO:  change to send current user
                    }
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default EventScreen;
