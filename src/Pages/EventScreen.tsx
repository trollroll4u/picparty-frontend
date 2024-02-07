import * as React from "react";
import { CommentDatanew, EventData, UserData } from "../DataStructure.ts";
import PhotosScreen from "../Components/PhotosScreen.tsx";
import { eventsExamples, picturesExamples, userExamples } from "../examples.ts";
import { ChangeEvent, useState } from "react";
import { getEvent, CanceledError } from "../Services/event-service.ts";
import { useParams } from "react-router-dom";
import { getUser } from "../Services/user-service.ts";
import CommentsScreen from "../Components/CommentsScreen.tsx";
import { createComment } from "../Services/comment-service.ts";

export interface IAppProps {}

function EventScreen(props: IAppProps) {
  // States
  const eventId = useParams();
  const [commentValue, setCommentValue] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [event, setEvent] = useState<EventData>();
  const [user, setUser] = useState<UserData>();

  // Functions
  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommentValue(e.target.value);
  };

  const onLikeEventButton = (event: EventData, user: UserData) => {
    if (event?.likes.find((like) => like.user_id === user?._id)) {
      console.log("unlike");
      const temp = {
        ...event,
        likes: event?.likes.filter((like) => like.user_id !== user?._id),
      };
      setEvent(temp);
    } else {
      console.log("like");
      const newLike: CommentDatanew = {
        like: true,
        user_id: user?._id,
        event_id: event._id,
        comment: "",
        picture_path: "",
      };
      // create like in db
      createComment(newLike);
      const temp = { ...event, likes: [...event?.likes, newLike] };
      setEvent(temp);
    }
  };

  const onCommentEventButton = (
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
        user_id: user?._id,
        event_id: event._id,
        like: false,
        picture_path: "",
      };
      const temp = { ...event, comments: [...event?.comments, newComment] };
      console.log(temp);
      setEvent(temp);
      // create comment in db
      createComment(newComment);
    }
  };

  const fillLikeIcon = (event: EventData, user: UserData) => {
    if (event?.likes.find((like) => like.user_id === user?._id)) {
      return <i className="bi bi-heart-fill" style={{ color: "red" }}></i>;
    } else {
      return <i className="bi bi-heart"></i>;
    }
  };

  // UseEffects
  React.useEffect(() => {
    // setEvent(eventsExamples[Number(eventId) - 1]);
    // setUser(userExamples[0]);
    const fetchUser = async (event: EventData) => {
      try {
        const user = await getUser(event?.user_id);
        setUser(user);
      } catch (error) {
        console.log("Error fetching user: " + error);
      }
    };

    const fetchEvent = async (event_id: string) => {
      try {
        const events = await getEvent(event_id).then((res) => {
          setEvent(res);
          fetchUser(res);

        });
        // await setEvent(events);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching event: " + error);
        setLoading(false);
      }
    };
    setLoading(true);
    fetchEvent(eventId.eventId as string);
    
    return () => {
    };
  }, []);
  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "black", maxWidth: "100%" , height: "100vh"}}
      >
        <br></br>
        {event && user && (
          <div>
            <div className="row text-center">
              <div className="col">
                <img
                  src={event?.event_pic_path}
                  style={{ width: "50rem", height: "24rem" }}
                />
              </div>

              <div className="col">
                <p className="fs-1 fw-bold" style={{ color: "white" }}>
                  {event?.title}
                </p>
                <p className="fs-3 fw-bold" style={{ color: "white" }}>
                  Date: {event?.date.toLocaleDateString()}
                </p>
                <p className="fs-3 fw-bold" style={{ color: "white" }}>
                  Owner: {user?.name || ""}
                </p>
                <p className="fs-3 fw-bold" style={{ color: "white" }}>
                  <i className="bi bi-heart"></i> {event?.likes.length}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i className="bi bi-chat"></i> {event?.comments.length}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i className="bi bi-image"></i> {event?.pictures?.length}
                </p>
                <button type="button" className="btn btn-light btn-lg">
                  <i className="bi bi-image"></i>
                  &nbsp;&nbsp; Add Some Photos
                </button>
                <button
                  type="button"
                  className="btn btn-light btn-lg"
                  style={{ margin: "2rem" }}
                  onClick={() => onLikeEventButton(event, user)} //TODO:  change to send current user
                >
                  {
                    fillLikeIcon(event, user) //TODO:  change to send current user
                  }
                  &nbsp;&nbsp; Like
                </button>
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="row">
              <PhotosScreen photos={event?.pictures}></PhotosScreen>
            </div>
            <div className="row " style={{ width: "50%", backgroundColor:"black" }}>
              <CommentsScreen comments={event?.comments}></CommentsScreen>
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
