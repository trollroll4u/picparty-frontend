import * as React from "react";
import { CommentDatanew, EventData, UserData } from "../DataStructure.ts";
import PhotosScreen from "../Components/PhotosScreen.tsx";
import { eventsExamples, picturesExamples, userExamples } from "../examples.ts";
import { ChangeEvent, useState } from "react";
import { getEvent, CanceledError } from "../Services/event-service.ts";
import { useParams } from "react-router-dom";
import { getUser } from "../Services/user-service.ts";
import CommentsScreen from "../Components/CommentsScreen.tsx"
import { createLike } from "../Services/like-service.ts";
import { createComment } from "../Services/comment-service.ts";

export interface IAppProps {}

function EventScreen(props: IAppProps) {
  // States
  const { eventId } = useParams();
  const [commentValue, setCommentValue] = useState("");
  const [event, setEvent] = useState<EventData>({
    id: 0,
    title: "",
    date: new Date(),
    owner_id: 0,
    event_pic_path: "",
    likes: [],
    comments: [],
    pictures: [],
    location: "",
    description: "",
  });
  const [user, setUser] = useState<UserData>({
    id: 0,
    name: "",
    email: "",
    password: "",
    profile_pic_path: "",
    events: [],
    comments: [],
    pictures: [],
    likes: [],
  });

  // Functions
  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommentValue(e.target.value);
  };

  const onLikeEventButton = (event: EventData, user: UserData) => {
    if (event?.likes.find((like) => like.user_id === user?.id)) {
      console.log("unlike");
      const temp = {
        ...event,
        likes: event?.likes.filter((like) => like.user_id !== user?.id),
      };
      setEvent(temp);
    } else {
      console.log("like");
      const newLike: CommentDatanew = {
        id: 0, //TODO: change to real id
        like: true,
        user_id: user?.id,
        event_id: event.id,
      };
      // create like in db
      createLike(newLike);
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
        id: 4, //TODO: change to real id
        comment: comment,
        user_id: user?.id,
        event_id: event.id,
      };
      const temp = { ...event, comments: [...event?.comments, newComment] };
      console.log(temp);
      setEvent(temp);
      // create comment in db
      createComment(newComment);
    }
  };

  const fillLikeIcon = (event: EventData, user: UserData) => {
    if (event?.likes.find((like) => like.user_id === user?.id)) {
      return <i className="bi bi-heart-fill" style={{ color: "red" }}></i>;
    } else {
      return <i className="bi bi-heart"></i>;
    }
  };

  // UseEffects
  React.useEffect(() => {
    setEvent(eventsExamples[Number(eventId) - 1]);
    setUser(userExamples[0]);
    // setLoading(true);
    // const { request, abort } = getEvent(Number(eventId) -1);
    // request.then((res: { data: React.SetStateAction<EventData>; }) => {
    //   setEvent(res.data);
    //   //     setLoading(false);
    //   // setUser(userExamples[0]);
    //   const { request , abort }  =  getUser(Number(event?.owner_id))
    //   request.then((res: { data: React.SetStateAction<UserData | undefined>; }) => {
    //       setUser(res.data);
    //     })
    //     request.catch((err: any) => {
    //       if (err instanceof CanceledError) return;
    //       console.log(err);
    //     });
    // });
    // request.catch((err: any) => {
    //   if (err instanceof CanceledError) return;
    //   console.log(err);
    //   // setLoading(false);
    // });
    // axios.get("http://localhost:3000/events/1").then((res) => {
    //   // setevent(res.data);
    //   setEvent(eventsExamples[0]);
    // });
    // axios.get("http://localhost:3000/users/get/" + event?.owner_id).then((res) => {
    //   // setEvent(res.data);
    //   setUser(userExamples[0])
    // });
    return () => {
      // abort();
    };
  }, []);
  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "black", maxWidth: "100%" }}
      >
        <br></br>
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
              Owner: {user?.name}
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
              style={{ margin: "2rem" }}
              onClick={() => onLikeEventButton(event, user)} //TODO:  change to send current user
            >
              {
                fillLikeIcon(event, user) //TODO:  change to send current user
              }
              &nbsp;&nbsp; Like
            </button>

            <button type="button" className="btn btn-light btn-lg">
              <i className="bi bi-image"></i>
              &nbsp;&nbsp; Add Some Photos
            </button>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="row">
          <PhotosScreen photos={event?.pictures}></PhotosScreen>
        </div>
        <div className="row">
          <CommentsScreen comments={event?.comments}></CommentsScreen>
        </div>
        <div className="row">
          <form className="row g-3">
            <div className="col">
              <input
                type="text"
                style={{ width: "50vw", margin: "auto" }}
                className="form-control form-control-lg"
                placeholder="Add tour comment..."
                value={commentValue}
                onChange={handleCommentChange}
              />
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-light btn-lg mb-3"
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
    </>
  );
}

export default EventScreen;
