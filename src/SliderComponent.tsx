import React, { ReactNode } from "react";
import Slider from "react-slick";

export default function SliderComponent() {
  const slider = React.useRef<Slider>(null);
  var settings = {
    dots: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    infinite: true,
    arrows: false,
    appendDots: (dots: ReactNode) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <div style={{ position: "relative" }}>
      <Slider ref={slider} {...settings}>
        <div>
          <img src="example.jpg" width={"100%"} height={800} />
        </div>
        <div>
          <img src="example.jpg" width={"100%"} height={800} />
        </div>
      </Slider>
      <button
        style={{
          border: "none",
          background: "none",
          position: "absolute",
          top: "50%",

        }}
        onClick={() => slider?.current?.slickPrev()}
      >
        <img
          src="arrow.svg"
          width={30}
          height={30}
          style={{ transform: "rotate(180deg)" }}
        />
      </button>
      <button
        style={{
          border: "none",
          background: "none",
          position: "absolute",
          top: "50%",
          right: "0%",
        }}
        onClick={() => slider?.current?.slickNext()}
      >
        <img src="arrow.svg" width={30} height={30} />
      </button>
    </div>
  );
}
