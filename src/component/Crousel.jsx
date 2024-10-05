import React from "react";

export default function Crousel() {
  return (
      <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide mb-3"
        data-bs-ride="carousel"
      >
        <div className="container carousel-inner mt-1">
          <div className="container carousel-item active">
          <img style={{height: '450px', width: '100%'}} src="/image/images.png" className="d-block " alt="..." />
          </div>
          <div className="container carousel-item">
          <img style={{height: '450px', width: '100%'}}  src="/image/images2.png" className="d-block " alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
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
          data-bs-target="#carouselExampleAutoplaying"
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
