import React from "react";
import EventCard from "./EventCard";
import { EventData, PictureData } from "../DataStructure.ts";
import PhotoCard from "./PhotoCard.tsx";

interface EventsScreenProps {
  photos: PictureData[] | undefined;
}

function PhotosScreen({ photos }: EventsScreenProps) {
  return (
    <>
      <div className="container-fluid text-center" key="photosContainer">
        <div className="row row-cols-6 row-cols-lg-4" key="photosRow">
          {photos && photos.map((photo, index) => {
            return (
              <div className="col" key={"col-" + index}>
                <PhotoCard photo={photo} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PhotosScreen;
