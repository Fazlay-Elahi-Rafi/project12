import React from "react";

import Slider from "react-slick";

import img from "../../img/slider-01.png";
import img2 from "../../img/slider-02.png";
import img3 from "../../img/slider-03.png";

import Props from "./props";

export default function Body() {
  var settings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900,
    prevArrow: false,
    nextArrow: false,
  };
  return (
    <section className="body">
      <div className="container container-lg-fluid">
        <Slider {...settings}>
          <Props
            title="fresh and healthy delicious food is wating for you"
            img={img}
          />
          <Props
            title="fresh and delicious food is wating for you"
            img={img2}
          />
          <Props
            title="fresh and delicious food is wating for you"
            img={img3}
          />
        </Slider>
      </div>
    </section>
  );
}
