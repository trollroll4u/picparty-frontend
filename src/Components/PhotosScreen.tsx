import { CommentDatanew } from "../DataStructure.ts";
import PhotoCard from "./PhotoCard.tsx";

interface EventsScreenProps {
  photos: CommentDatanew[] | undefined;
  deleteComment: (comment_id: string) => void;
}

function PhotosScreen({ photos,deleteComment }: EventsScreenProps) {
  return (
    <>
      <div className="container-fluid text-center" key="photosContainer">
        <div className="row row-cols-6 row-cols-lg-6" key="photosRow">
          {photos && photos.map((photo, index) => {
            return (
              <div className="col" key={"col-" + index}>
                <PhotoCard photo={photo} deleteComment={deleteComment}/>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PhotosScreen;
