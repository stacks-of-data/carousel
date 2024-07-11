import React from "react";
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
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    arrows: false,
  };
  return (
    <div style={{ position: "relative" }}>
      <Slider ref={slider} {...settings}>
        <div>
          <h3>1</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
		  <img src="example.jpg" width={800} height={600} />
        </div>
        <div>
          <h3>2</h3>
          <img src="example.jpg" width={800} height={600} />
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
          left: "95%",
        }}
        onClick={() => slider?.current?.slickNext()}
      >
        <img src="arrow.svg" width={30} height={30} />
      </button>
    </div>
  );
}
