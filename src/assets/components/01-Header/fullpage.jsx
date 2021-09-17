import React, { useState } from "react";
import { Link } from "react-router-dom";

import { TiTimesOutline } from "react-icons/ti";
import { FaBars } from "react-icons/fa";

import Search from "./search";

const FullPage = () => {
  const [show, upShow] = useState(false);

  const closeFun = () => {
    upShow(false);
  };

  const showFun = () => {
    upShow(true);
  };
  return (
    <section className="d-inline-block d-lg-none">
      <div className="container">
        <div className="row">
          <div className="col-9 col-sm-10 d-flex justify-content-end align-items-center">
            <div className="col-3 col-sm-2 d-flex justify-content-center">
              <div className="fullpage__bars">
                <FaBars
                  onClick={showFun}
                  className="fullpage__bars-icon"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${show ? "fullpage__navclose fullpage" : "fullpage"}`}>
        <div className="container">
          <div className="col-12 my-3 text-light">
            <TiTimesOutline
              onClick={closeFun}
              className={`${show ? "fullpage__close" : "navclose"}`}
              style={{ cursor: "pointer" }}
            />
          </div>

          <ul className="fullpage__list">
            <li className="fullpage__list-li my-4">
              <Link to="/" className="fullpage__list-link active">
                home
              </Link>
            </li>
            <li className="fullpage__list-li mb-4">
              <Link to="/about" className="fullpage__list-link">
                about
              </Link>
            </li>
            <li className="fullpage__list-li mb-4">
              <Link to="/cart" className="fullpage__list-link">
                cart
              </Link>
            </li>
            <li className="fullpage__list-li mb-4">
              <Link to="/product" className="fullpage__list-link">
                products
              </Link>
            </li>
            <li className="fullpage__list-li mb-4">
              <Link to="/" className="fullpage__list-link">
                contact us
              </Link>
            </li>
          </ul>
          <div className="col-10 col-md-7 d-flex justify-content-between align-items-center mb-4">
            <button className="btn nav__sign d-inline d-lg-none">
              sign up
            </button>
            <div className="fullpage__search">
              <Search />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullPage;
