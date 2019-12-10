import React from 'react';

const Carouse = () => (
  <div
    id="carouselExampleCaptions"
    className="carousel slide"
    data-ride="carousel"
  >
    <ol className="carousel-indicators">
      <li
        data-target="#carouselExampleCaptions"
        data-slide-to="0"
        className="active Home-captions"
      ></li>
      <li
        data-target="#carouselExampleCaptions"
        data-slide-to="1"
        className="Home-captions"
      ></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="https://demo.codezeel.com/opencart/OPC07/OPC070162/image/cache/catalog/main-banner-1-1903x850.jpg"
          className="d-block"
          alt=""
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://demo.codezeel.com/opencart/OPC07/OPC070162/image/cache/catalog/main-banner-2-1903x850.jpg"
          className="d-block"
          alt=""
        />
      </div>
    </div>
    <a
      className="carousel-control-prev"
      href="#carouselExampleCaptions"
      role="button"
      data-slide="prev"
    >
      <span
        className="carousel-control-prev-icon Home-next-prev"
        aria-hidden="true"
      ></span>
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#carouselExampleCaptions"
      role="button"
      data-slide="next"
    >
      <span
        className="carousel-control-next-icon Home-next-prev"
        aria-hidden="true"
      ></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
);

export default Carouse;
