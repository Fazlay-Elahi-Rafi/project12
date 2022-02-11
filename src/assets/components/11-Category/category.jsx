import React, { useState } from "react";

import img01 from "../../img/f-1.png";

import { FiRefreshCw } from "react-icons/fi";
import { FaListUl, FaRegHeart, FaStar, FaRegStar } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";
import ProductProps from "./productProps";

import Data from "./api";

export default function Category() {
  const [data, setData] = useState(Data);
  return (
    <>
      <section className="category">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <h2 className="about__title">Product Category</h2>
            </div>

            {/* <!-- Category left --> */}
            <div className="col-11 col-sm-12 col-md-3 m-auto m-sm-0">
              <div className="row">
                {/* <!-- Not work after md device --> */}
                <a
                  className="
                  btn
                  d-none d-md-flex
                  justify-content-between
                  category__link
                "
                  href="#"
                >
                  <div className="">
                    <h5 className="category__link-text">Filter</h5>
                  </div>
                  <div className="">
                    <i className="bx bx-plus category__link-icon"></i>
                  </div>
                </a>

                {/* <!-- Not work before md device --> */}
                <a
                  className="
                  btn
                  d-flex d-md-none
                  justify-content-between
                  category__link
                "
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <div className="">
                    <h5 className="category__link-text">Filter</h5>
                  </div>
                  <div className="">
                    <i className="bx bx-plus category__link-icon"></i>
                  </div>
                </a>
                <div
                  className="collapse show profile__nav"
                  id="collapseExample"
                >
                  {/* <!-- Categories --> */}
                  <ul className="category__nav-list">
                    <li className="category__nav-title">Categories</li>
                    <li>
                      <input className="mx-2" type="checkbox" />
                      All Category
                    </li>
                    <li>
                      <input className="mx-2" type="checkbox" />
                      Fish Fry
                    </li>
                    <li>
                      <input className="mx-2" type="checkbox" />
                      Fish Fry
                    </li>
                    <li>
                      <input className="mx-2" type="checkbox" />
                      Chicken
                    </li>
                    <li>
                      <input className="mx-2" type="checkbox" />
                      Chicken
                    </li>
                    <li>
                      <input className="mx-2" type="checkbox" />
                      Meat
                    </li>
                    <li>
                      <input className="mx-2" type="checkbox" />
                      Meat
                    </li>
                    <li className="">
                      <span className="category__nav-sm">show more</span>
                    </li>
                  </ul>

                  {/* <!-- Sub Categories --> */}
                  <ul className="category__nav-list my-3">
                    <li className="category__nav-title">sub Categories</li>
                    <li>
                      <input className="mx-2" type="checkbox" />
                      All Category
                    </li>
                    <li>
                      <input className="mx-2" type="checkbox" />
                      Fish Fry
                    </li>
                    <li>
                      <input className="mx-2" type="checkbox" />
                      Fish Fry
                    </li>
                    <li>
                      <input className="mx-2" type="checkbox" />
                      Chicken
                    </li>
                    <li>
                      <input className="mx-2" type="checkbox" />
                      Chicken
                    </li>
                    <li>
                      <input className="mx-2" type="checkbox" />
                      Meat
                    </li>
                    <li>
                      <input className="mx-2" type="checkbox" />
                      Meat
                    </li>
                    <li className="">
                      <span className="category__nav-sm">show more</span>
                    </li>
                  </ul>

                  {/* <!-- Price --> */}
                  <div className="col-12 category__nav-list pb-3">
                    <h5 className="category__nav-title">price</h5>
                    <div className="col-10 col-lg-9 mx-3 mx-lg-4">
                      <div className="d-flex justify-content-between">
                        <div className="">
                          <input
                            className="category__price-inp"
                            type="number"
                            placeholder="0"
                          />
                        </div>
                        {/* <!-- <span className="m-auto"
                      ><i className="bx bx-minus category__price-dif"></i
                    ></span> --> */}
                        <div className="text-end mx-4 mx-sm-5 mx-md-3">
                          <input
                            className="category__price-inp"
                            type="number"
                            placeholder="1000"
                          />
                        </div>
                      </div>
                      <div className="mt-4 mx-lg-0">
                        <input className="category__price-range" type="range" />
                      </div>
                    </div>
                  </div>

                  {/* <!-- Color --> */}
                  <ul className="category__nav-list mt-3 mb-5 pb-3">
                    <li className="category__nav-title">color</li>
                    <li>
                      <input className="mx-2" type="checkbox" />
                      All color
                    </li>
                    <li>
                      <input className="mx-2" type="checkbox" />
                      red
                    </li>
                    <li>
                      <input className="mx-2" type="checkbox" />
                      white
                    </li>
                    <li>
                      <input className="mx-2" type="checkbox" />
                      green
                    </li>
                    <li>
                      <input className="mx-2" type="checkbox" />
                      black
                    </li>
                    <li>
                      <input className="mx-2" type="checkbox" />
                      tomato
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-9 col-xl-8 mx-xl-4 mx-xxl-5 mt-4 mt-md-0">
              {/* <!-- Category Right Head --> */}
              <div className="row mb-4">
                <div className="col-12 d-flex justify-content-between">
                  <div className="">
                    <h5 className="profile__card-dis fw-bold">all product</h5>
                  </div>
                  <div className="d-flex">
                    <div className="">
                      <FiRefreshCw className="category__link-icon" />
                    </div>
                    <div className="mx-3">
                      <FaListUl className="category__link-icon" />
                    </div>
                    <div className="">
                      <BsGrid3X3GapFill className="category__link-icon" />
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Category Products --> */}
              <div className="row">
                {/* <div className="col-12 mb-4 mb-xl-4">
                  <div className="card extra__card category__card mx-md-2 mx-xl-0">
                    <div className="row">
                      <div
                        className="
                        col-lg-5
                        category__card-image
                        d-flex
                        align-items-center
                      "
                      >
                        <div className="d-flex">
                          <a href="#" className="">
                            <TiShoppingCart className="category__card-iconlg category__card-iconlg--one" />
                          </a>
                          <a href="#" className="">
                            <FaRegHeart className="category__card-iconlg category__card-iconlg--two" />
                          </a>
                        </div>
                        <a href="#" className="category__card-image--link">
                          <img
                            className="img-fluid extra__card-img"
                            src={img01}
                            alt="image name"
                          />
                        </a>
                      </div>
                      <div className="col-lg-7">
                        <div className="card-body">
                          <a href="#" className="items__card-titlebig">
                            Vegetable Barger
                          </a>
                          <div
                            className="
                            col-10
                            items__card-star
                            d-sm-flex
                            justify-content-between
                          "
                          >
                            <div className="col-sm-6 col-lg-7 col-xl-6">
                              <ul>
                                <li>
                                  <FaStar className="items__card-star--active" />
                                </li>
                                <li>
                                  <FaStar className="items__card-star--active" />
                                </li>
                                <li>
                                  <FaStar className="items__card-star--active" />
                                </li>
                                <li>
                                  <FaRegStar />
                                </li>
                                <li>
                                  <FaRegStar />
                                </li>
                              </ul>
                            </div>
                            <div className="ccol-sm-7 col-lg-8 col-xl-7 mt-3 mt-sm-0">
                              <li className="mx-sm-3 items__card-wishlist">
                                <FaRegHeart />
                                <span className="mx-2">add to wishlist</span>
                              </li>
                            </div>
                          </div>
                          <div className="mt-3">
                            <span className="items__card-categori">
                              Categories : Fry Food
                            </span>
                          </div>
                          <div className="mt-2">
                            <p className="product__card-text items__card-time--text">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Blanditiis similique cum ad neque, sint
                              natus aliquam dolorum quod molestiae repellat
                              labore nesciunt fugiat, dolores pariatur, possimus
                              magnam esse harum explicabo!
                            </p>
                          </div>
                          <div
                            className="
                            d-sm-flex
                            justify-content-between
                            align-items-center
                            mt-3
                          "
                          >
                            <span className="featured__items-price--num extra__price">
                              $17.00
                            </span>
                            <div className="col-sm-6 col-xl-5">
                              <button className="btn form-control items__card-btn">
                                <CgShoppingCart className="items__card-btn--icon" />
                                add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {data.map((item) => {
                  return (
                    <>
                      <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4 mb-xl-4">
                        <div className="card category__card extra__card">
                          <div className="extra__card-image">
                            <div className="d-flex">
                              <a href="#" className="">
                                {item.cart}
                              </a>
                              <a href="#" className="">
                                {item.heart}
                              </a>
                            </div>
                            <a href="#">
                              <img
                                className="img-fluid extra__card-img"
                                src={item.image}
                                alt="image name"
                              />
                            </a>
                          </div>
                          <div className="card-body">
                            <a
                              href="#"
                              className="comnt__body-text extra__card-title"
                            >
                              {item.title}
                            </a>
                            <div className="items__card-star d-flex justify-content-between">
                              <ul>
                                <li>{item.icon}</li>
                                <li>{item.icon}</li>
                                <li>{item.icon}</li>
                                <li>{item.icon2}</li>
                                <li>{item.icon2}</li>
                              </ul>
                            </div>
                            <div className="">
                              <span className="featured__items-price--num extra__price">
                                ${item.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
                {/* <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4 mb-xl-4">
                  <ProductProps
                    img={img01}
                    title="Vegetable Barger"
                    price="$17.00"
                    cart={
                      <TiShoppingCart className="category__card-icon category__card-icon--one" />
                    }
                    heart={
                      <FaRegHeart className="category__card-icon category__card-icon--two" />
                    }
                    icon={<FaStar className="items__card-star--active" />}
                    icon={<FaStar className="items__card-star--active" />}
                    icon={<FaStar className="items__card-star--active" />}
                    icon2={<FaRegStar />}
                    icon2={<FaRegStar />}
                  />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4 mb-xl-4">
                  <ProductProps
                    img={img01}
                    title="Vegetable Barger"
                    price="$17.00"
                    cart={
                      <TiShoppingCart className="category__card-icon category__card-icon--one" />
                    }
                    heart={
                      <FaRegHeart className="category__card-icon category__card-icon--two" />
                    }
                    icon={<FaStar className="items__card-star--active" />}
                    icon={<FaStar className="items__card-star--active" />}
                    icon={<FaStar className="items__card-star--active" />}
                    icon2={<FaRegStar />}
                    icon2={<FaRegStar />}
                  />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4 mb-xl-4">
                  <ProductProps
                    img={img01}
                    title="Vegetable Barger"
                    price="$17.00"
                    cart={
                      <TiShoppingCart className="category__card-icon category__card-icon--one" />
                    }
                    heart={
                      <FaRegHeart className="category__card-icon category__card-icon--two" />
                    }
                    icon={<FaStar className="items__card-star--active" />}
                    icon={<FaStar className="items__card-star--active" />}
                    icon={<FaStar className="items__card-star--active" />}
                    icon2={<FaRegStar />}
                    icon2={<FaRegStar />}
                  />
                </div> */}

                {/* <!-- second row --> */}
                {/* <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4">
                  <ProductProps
                    img={img01}
                    title="Vegetable Barger"
                    price="$17.00"
                    cart={
                      <TiShoppingCart className="category__card-icon category__card-icon--one" />
                    }
                    heart={
                      <FaRegHeart className="category__card-icon category__card-icon--two" />
                    }
                    icon={<FaStar className="items__card-star--active" />}
                    icon={<FaStar className="items__card-star--active" />}
                    icon={<FaStar className="items__card-star--active" />}
                    icon2={<FaRegStar />}
                    icon2={<FaRegStar />}
                  />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4">
                  <ProductProps
                    img={img01}
                    title="Vegetable Barger"
                    price="$17.00"
                    cart={
                      <TiShoppingCart className="category__card-icon category__card-icon--one" />
                    }
                    heart={
                      <FaRegHeart className="category__card-icon category__card-icon--two" />
                    }
                    icon={<FaStar className="items__card-star--active" />}
                    icon={<FaStar className="items__card-star--active" />}
                    icon={<FaStar className="items__card-star--active" />}
                    icon2={<FaRegStar />}
                    icon2={<FaRegStar />}
                  />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4">
                  <ProductProps
                    img={img01}
                    title="Vegetable Barger"
                    price="$17.00"
                    cart={
                      <TiShoppingCart className="category__card-icon category__card-icon--one" />
                    }
                    heart={
                      <FaRegHeart className="category__card-icon category__card-icon--two" />
                    }
                    icon={<FaStar className="items__card-star--active" />}
                    icon={<FaStar className="items__card-star--active" />}
                    icon={<FaStar className="items__card-star--active" />}
                    icon2={<FaRegStar />}
                    icon2={<FaRegStar />}
                  />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4">
                  <ProductProps
                    img={img01}
                    title="Vegetable Barger"
                    price="$17.00"
                    cart={
                      <TiShoppingCart className="category__card-icon category__card-icon--one" />
                    }
                    heart={
                      <FaRegHeart className="category__card-icon category__card-icon--two" />
                    }
                    icon={<FaStar className="items__card-star--active" />}
                    icon={<FaStar className="items__card-star--active" />}
                    icon={<FaStar className="items__card-star--active" />}
                    icon2={<FaRegStar />}
                    icon2={<FaRegStar />}
                  />
                </div> */}

                {/* third row */}
                {/* <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4">
                  <ProductProps
                    img={img01}
                    title="Vegetable Barger"
                    price="$17.00"
                    cart={
                      <TiShoppingCart className="category__card-icon category__card-icon--one" />
                    }
                    heart={
                      <FaRegHeart className="category__card-icon category__card-icon--two" />
                    }
                    icon={<FaStar className="items__card-star--active" />}
                    icon={<FaStar className="items__card-star--active" />}
                    icon={<FaStar className="items__card-star--active" />}
                    icon2={<FaRegStar />}
                    icon2={<FaRegStar />}
                  />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4">
                  <ProductProps
                    img={img01}
                    title="Vegetable Barger"
                    price="$17.00"
                    cart={
                      <TiShoppingCart className="category__card-icon category__card-icon--one" />
                    }
                    heart={
                      <FaRegHeart className="category__card-icon category__card-icon--two" />
                    }
                    icon={<FaStar className="items__card-star--active" />}
                    icon={<FaStar className="items__card-star--active" />}
                    icon={<FaStar className="items__card-star--active" />}
                    icon2={<FaRegStar />}
                    icon2={<FaRegStar />}
                  />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4">
                  <ProductProps
                    img={img01}
                    title="Vegetable Barger"
                    price="$17.00"
                    cart={
                      <TiShoppingCart className="category__card-icon category__card-icon--one" />
                    }
                    heart={
                      <FaRegHeart className="category__card-icon category__card-icon--two" />
                    }
                    icon={<FaStar className="items__card-star--active" />}
                    icon={<FaStar className="items__card-star--active" />}
                    icon={<FaStar className="items__card-star--active" />}
                    icon2={<FaRegStar />}
                    icon2={<FaRegStar />}
                  />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4">
                  <ProductProps
                    img={img01}
                    title="Vegetable Barger"
                    price="$17.00"
                    cart={
                      <TiShoppingCart className="category__card-icon category__card-icon--one" />
                    }
                    heart={
                      <FaRegHeart className="category__card-icon category__card-icon--two" />
                    }
                    icon={<FaStar className="items__card-star--active" />}
                    icon={<FaStar className="items__card-star--active" />}
                    icon={<FaStar className="items__card-star--active" />}
                    icon2={<FaRegStar />}
                    icon2={<FaRegStar />}
                  />
                </div> */}
              </div>

              {/* <!-- Category Pagination --> */}
              <div className="row">
                <nav aria-label="Page navigation example">
                  <ul className="pagination category__pagination">
                    <li className="page-item">
                      <a
                        className="page-link category__pagination-link"
                        href="#"
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="
                        page-link
                        category__pagination-link category__pagination-active
                      "
                        href="#"
                      >
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link category__pagination-link"
                        href="#"
                      >
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link category__pagination-link"
                        href="#"
                      >
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link category__pagination-link"
                        href="#"
                        aria-label="Next"
                      >
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
