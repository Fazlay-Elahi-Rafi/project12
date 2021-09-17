import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import currencyFormatter from "currency-formatter";

import { BsDash, BsPlus } from "react-icons/bs";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Details = () => {
  const history = useHistory();
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.ProductsReducer);
  const { active, two, three, four, five } = useSelector(
    (state) => state.MenuReducer
  );
  const { msg, hideMsg } = useSelector((state) => state.CartReducer);

  useEffect(() => {
    if (active) {
      dispatch({ type: "PRODUCT", id });
    }
    if (two) {
      dispatch({ type: "PRODUCT_TWO", id });
    }
    if (three) {
      dispatch({ type: "PRODUCT_THREE", id });
    }
    if (four) {
      dispatch({ type: "PRODUCT_THREE", id });
    }
    if (five) {
      dispatch({ type: "PRODUCT_THREE", id });
    }

    //   if (product.image === undefined) {
    //     history.push("/");
  }, [id, product]);

  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    setInterval(() => {
      dispatch({ type: "HIDE_ALERT" });
    }, 3500);
  }, []);

  return (
    <section className="details">
      <div
        className={`${hideMsg ? "head__alert" : " head__hide"}`}
        role="alert"
      >
        {msg}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-7 col-xl-6 m-auto mb-5 mb-lg-0">
            <div className="details__image">
              <img className="img-fluid" src={`${product.image}`} alt="" />
            </div>
          </div>
          <div className="col-md-8 col-lg-5 m-auto">
            <div className="details__name">{product.name}</div>
            <ul className="details__list">
              <li>
                <AiTwotoneStar className="details__list-star" />
              </li>
              <li>
                <AiTwotoneStar className="details__list-star" />
              </li>
              <li>
                <AiTwotoneStar className="details__list-star" />
              </li>
              <li>
                <AiOutlineStar className="details__list-star" />
              </li>
              <li>
                <span className="details__list-review">(7 reviews)</span>
              </li>
            </ul>
            <div className="mb-3">
              <span className="details__category">category:</span>
              <span className="details__category-name">{product.category}</span>
            </div>
            <div className="details__social">
              <ul className="details__social-list">
                <li>
                  <span className="details__social-list--text">social:</span>
                </li>
                <li>
                  <FaFacebookF className="details__social-list--icon" />
                </li>
                <li>
                  <FaTwitter className="details__social-list--icon" />
                </li>
                <li>
                  <FaInstagram className="details__social-list--icon" />
                </li>
              </ul>
            </div>
            <div className="col-10 col-sm-6 col-md-7 col-xl-5">
              <div className="details__prices">
                <span className="details__prices-disc">
                  {currencyFormatter.format(product.price, { code: "USD" })}
                </span>
                <span className="details__prices-price">
                  {currencyFormatter.format(product.discountPrice, {
                    code: "USD",
                  })}
                </span>
              </div>
            </div>
            <div className="details__info">
              <div className="details__info-qty">
                <div className="" style={{ margin: "0 0 1rem 0" }}>
                  <span className="details__info-qty--title">quantity:</span>
                </div>
                <span className="details__info-qty--dec" onClick={decQuantity}>
                  <BsDash className="details__info-qty--icon" />
                </span>
                <span className="details__info-qty--num">{quantity}</span>
                <span
                  className="details__info-qty--inc"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <BsPlus className="details__info-qty--icon" />
                </span>
              </div>
            </div>
            <button
              className="btn details__btn"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: { product, quantity },
                })
              }
            >
              <TiShoppingCart className="details__btn--icon" />
              add to cart
            </button>
          </div>
        </div>
        <div className="row mt-5 pt-5">
          <div className="col-12 text-center">
            <button className="btn details__button">details</button>
          </div>
          <div className="col-12 details__body">
            <p className="details__body--para1">{product.about}</p>
            <p className="details__body--para2">{product.about2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
