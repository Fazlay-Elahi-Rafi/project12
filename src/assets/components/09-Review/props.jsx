import React from "react";

import { FaStar, FaRegStar } from "react-icons/fa";

export default function Props(props) {
  return (
    <>
      <div className="col-md-11 col-xl-8 m-auto">
        <div className="card review__card mb-3">
          <div className="row g-0">
            <div className="col-md-4 col-lg-3">
              <div className="review__card-img">
                <img
                  src={props.img}
                  className="img-fluid m-auto"
                  alt="person"
                />
              </div>
            </div>
            <div className="col-md-8 m-auto pb-3 pb-md-0">
              <div className="card-body">
                <p className="review__card-text">{props.para}</p>
                <div className="">
                  <ul>
                    <li>
                      <FaStar className="review__card-star--active" />
                    </li>
                    <li>
                      <FaStar className="review__card-star--active" />
                    </li>
                    <li>
                      <FaStar className="review__card-star--active" />
                    </li>
                    <li>
                      <FaRegStar />
                    </li>
                    <li>
                      <FaRegStar />
                    </li>
                  </ul>
                  <div className="">
                    <h3 className="review__card-name">{props.name}</h3>
                    <span className="review__card-status">{props.status}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
