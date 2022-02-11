import React from "react";

export default function ProductProps(props) {
  return (
    <>
      <div className="card category__card extra__card">
        <div className="extra__card-image">
          <div className="d-flex">
            <a href="#" className="">
                {props.cart}
            </a>
            <a href="#" className="">
                {props.heart}
            </a>
          </div>
          <a href="#">
            <img
              className="img-fluid extra__card-img"
              src={props.img}
              alt="image name"
            />
          </a>
        </div>
        <div className="card-body">
          <a href="#" className="comnt__body-text extra__card-title">
            {props.title}
          </a>
          <div className="items__card-star d-flex justify-content-between">
            <ul>
              <li>{props.icon}</li>
              <li>{props.icon}</li>
              <li>{props.icon}</li>
              <li>{props.icon2}</li>
              <li>{props.icon2}</li>
            </ul>
          </div>
          <div className="">
            <span className="featured__items-price--num extra__price">
              {props.price}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
