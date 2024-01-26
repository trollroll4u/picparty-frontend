import React from "react";

interface CaruselImagesProps {
  images: string[];
}

function CaruselImages({ images }: CaruselImagesProps) {
  return (
    <>
      <div
        id="carouselExample"
        className="carousel slide d-block"
        style={{ height: "60vh" }}
      >
        <div className="carousel-inner" id="carousel-inner">
          {images.map((imageSrc, idx) => (
            <div
              className="carousel-item"
              id={"carousel-item - " + idx.toString()}
            >
              <img
                src={imageSrc}
                className="img-responsive"
                alt="..."
                id={"image-" + idx.toString()}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          id="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            id="carousel-control-prev-icon"
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden" id="visually-hidden">
            Previous
          </span>
        </button>
        <button
          id="carousel-control-next"
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            id="carousel-control-next-icon"
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span id="try2" className="visually-hidden">
            Next
          </span>
        </button>
      </div>
    </>
  );
}

export default CaruselImages;
