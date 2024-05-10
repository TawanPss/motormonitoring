import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import bgimg from "./bgimg.jpg";
import "./slide.css";
export default function MyCarousel() {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        className="my-carousel"
      >
        <div>
          <img src={bgimg} alt="Image 1" />
          <p className="carousel-label">What is Motor Monitoring system?</p>
          <button className="carousel-button">Learn More</button>
        </div>
        <div>
          <img src={bgimg} alt="Image 2" />
          <p className="carousel-label">About Us</p>
        </div>
        <div>
          <img src={bgimg} alt="Image 3" />
          <p className="carousel-label">Contact us</p>
        </div>
      </Carousel>
    </>
  );
}
