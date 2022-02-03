import React from "react";
import Slider from "react-slick";

import { FaRegEye, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

import img from "../../img/adds-01.jpg";
import img2 from "../../img/adds-02.jpg";
import Props from "./props";

export default function Popular() {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <FaArrowLeft className="slick__nex" />,
    nextArrow: <FaArrowRight className="slick__pre" />,
    responsive: [
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="popular">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 col-lg-5 m-auto mb-4 mb-md-0">
            <h2 className="popular__title">Most Popular Items</h2>
            <div className="my-3 my-xl-5">
              <p className="popular__text mb-2">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur,
              </p>
              <p className="popular__text">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur,
              </p>
            </div>

            <button className="btn popular__btn">learn more</button>
          </div>

          <div className="col-sm-6 col-lg-7">
            <Slider {...settings} className="popular__slider">
              <Props
                eye={<FaRegEye className="popular__card-icon2" />}
                cart={<TiShoppingCart className="popular__card-icon" />}
                img={img}
                title="Vegetable Burger"
                text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots"
                btn="add to cart"
                price="$25.00"
              />
              <Props
                eye={<FaRegEye className="popular__card-icon2" />}
                cart={<TiShoppingCart className="popular__card-icon" />}
                img={img2}
                title="Vegetable Burger"
                text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots"
                btn="add to cart"
                price="$25.00"
              />
              <Props
                eye={<FaRegEye className="popular__card-icon2" />}
                cart={<TiShoppingCart className="popular__card-icon" />}
                img={img}
                title="Vegetable Burger"
                text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots"
                btn="add to cart"
                price="$25.00"
              />
              <Props
                eye={<FaRegEye className="popular__card-icon2" />}
                cart={<TiShoppingCart className="popular__card-icon" />}
                img={img2}
                title="Vegetable Burger"
                text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots"
                btn="add to cart"
                price="$25.00"
              />
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
