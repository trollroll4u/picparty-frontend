import React from "react";
import { PictureData } from "../DataStructure.ts";

interface CaruselImagesProps {
  images: PictureData[];
}

function createSlides(images: PictureData[]) {
  let slides = images.map((image, index) => {
    return (
      <div className={"carousel-item" + (index === 0 ? " active" : "")}>
        <img src={image.path} className="d-block w-100" alt="..." style={{ height:"60vh"}} />
      </div>
    );
  });

  return slides;
}

function CaruselImages({ images }: CaruselImagesProps) {
  const slides = createSlides(images);

  return (
    <>
      <div
        id="carouselExample"
        className="carousel slide"
      >
        <div className="carousel-inner">{slides}</div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default CaruselImages;
