import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Data from "./api";

export default function Menu() {
  const [state, upState] = useState(Data);

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900,
    slidesToShow: 8,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: <FaArrowLeft />,
    nextArrow: <FaArrowRight />,
    responsive: [
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="menu">
      <div className="col-12">
        <h2 className="menu__title">top cuisines</h2>
      </div>
      <Slider {...settings}>
        {state.map((item) => {
          const { id, text, img, link } = item;
          return (
            <div div className="menu__body" key={id}>
              <Link to={link} className="menu__link">
                <img className="img-fluid" src={img} alt="img" />
                <div className="">
                  <h5 className="menu__text">{text}</h5>
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
