import React from "react";
import { CommentDatanew } from "../DataStructure.ts";

interface CaruselImagesProps {
  images: CommentDatanew[];
}

function createSlides(images: CommentDatanew[]) {
  let slides = images.map((image, index) => {
    return (
      <div
        className={"carousel-item" + (index === 0 ? " active" : "")}
        key={"carousel-item" + index}
      >
        <img
          key={"carousel-image" + (index === 0 ? " active" : "")}
          src={image.picture_file}
          className="d-block w-100"
          alt="..."
          style={{ height: "60vh" }}
        />
      </div>
    );
  });

  return slides;
}

function CaruselImages({ images }: CaruselImagesProps) {
  const slides = createSlides(images);

  return (
    <>
      <div id="carouselExample" className="carousel slide" key="carousel">
        <div className="carousel-inner" key="carousel-inner">
          {slides}
        </div>
        <button
          key={"carousel-control-prev"}
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            key={"carousel-control-prev-icon"}
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span
            className="visually-hidden"
            key={"carousel-control-prev-visually-hidden"}
          >
            Previous
          </span>
        </button>
        <button
          key={"carousel-control-next"}
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            key={"carousel-control-next-icon"}
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span
            key={"carousel-control-next-visually-hidden"}
            className="visually-hidden"
          >
            Next
          </span>
        </button>
      </div>
    </>
  );
}

export default CaruselImages;
