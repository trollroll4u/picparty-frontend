import { useState } from "react";
import { CommentDatanew } from "../DataStructure.ts";

interface CaruselImagesProps {
  images: CommentDatanew[];
}

function CaruselImages({ images }: CaruselImagesProps) {
  const slides = () => {
    let slides = images.map((image, index) => (
      <div
        className={`carousel-item ${index === activeIndex ? "active" : ""}`}
        key={"carousel-item" + index}
      >
        <img
          key={"carousel-image" + (index === 0 ? " active" : "")}
          src={image.pic_file}
          className="d-block w-100"
          alt={`Slide ${index}`}
          style={{ height: "60vh" }}
        />
      </div>
    ));

    return slides;
  };
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div id="carouselExample" className="carousel slide" key="carousel">
        <div className="carousel-inner" key="carousel-inner">
          {slides()}
        </div>
        <button
          key={"carousel-control-prev"}
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          onClick={() =>
            setActiveIndex((activeIndex + images.length - 1) % images.length)
          }
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
          onClick={() => setActiveIndex((activeIndex + 1) % images.length)}
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
