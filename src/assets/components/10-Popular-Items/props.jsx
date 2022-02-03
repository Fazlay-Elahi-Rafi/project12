import React from "react";

export default function Props(props) {
  return (
    <>
      <div className="card popular__card">
        <div className="col-md-10 col-lg-11 popular__card-col">
          <div className="popular__card-image">
            <div className="">
              <div className="">
                <a href="#">
                  {props.eye}
                </a>
              </div>
              <div className="">
                <a href="#">
                  {props.cart}
                </a>
              </div>
            </div>
            <img
              className="img-fluid popular__card-items--img"
              src={props.img}
              alt="image name"
            />
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <a href="#" className="popular__card-title">
                {props.title}
              </a>
            </div>
            <p className="popular__card-text">{props.text}</p>
            <div
              className="
                        d-flex
                        justify-content-between
                        align-items-baseline
                        "
            >
              <button className="btn popular__card-btn">{props.btn}</button>
              <div className="popular__card-price">
                <span className="popular__card-price--disc">{props.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
