import React, { useState } from "react";
import img1 from "../assets/party posters/Summer-Party-Poster-Template.jpg";
import { CommentData, PictureData, UserData } from "../DataStructure.ts";
import { CanceledError, getUser } from "../Services/user-service.ts";
import { userExamples } from "../examples.ts";

interface EventProps {
  comment: CommentData;
}

function CommentCard({ comment }: EventProps) {
  const [user, setUser] = useState<UserData | undefined>();

  React.useEffect(() => {
    setUser(userExamples[0]);
    // const { request, abort } = getUser(Number(comment?.user_id));
    // request.then(
    //   (res: { data: React.SetStateAction<UserData | undefined> }) => {
    //     setUser(res.data);
    //   }
    // );
    // request.catch((err: any) => {
    //   if (err instanceof CanceledError) return;
    //   console.log(err);
    // });
    // return () => {
    //   abort();
    // };
  }, []);
  return (
    <div className="card mx-1 my-2" key={"card-" + comment.id}>
      <div
        className="card-body"
        key={"card-body-" + comment.id}
        style={{ display: "inline" }}
      >
        <p className="d-md-inline fs-5">
          <span className="fw-bold fs-4"> {user?.name}</span>{" "}
          {comment.message}
        </p>
      </div>
    </div>
  );
}

export default CommentCard;
