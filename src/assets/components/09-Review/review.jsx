import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import img from "../../img/review-1.jpg";

import Props from "./props";

export default function Comnt() {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <FaArrowLeft className="" />,
    nextArrow: <FaArrowRight className="" />,
  };
  return (
    <section className="review">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5 text-center">
            <h2 className="popular__title">customer reviews</h2>
          </div>

          <Slider {...settings} className="review__slider">
            <div className="">
              <Props
                img={img}
                para="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"
                name="fazlay rafi"
                status="Alpha Consumer Foods"
              />
            </div>
            <div className="">
              <Props
                img={img}
                para="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"
                name="fazlay rafi"
                status="Alpha Consumer Foods"
              />
            </div>
            <div className="">
              <Props
                img={img}
                para="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"
                name="fazlay rafi"
                status="Alpha Consumer Foods"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
