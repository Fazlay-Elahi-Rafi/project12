import React, { useState } from "react";
import { Link } from "react-router-dom";

import { TiTimesOutline } from "react-icons/ti";
import { FaBars } from "react-icons/fa";

import { navData } from "./navData";

import Search from "./search";

const FullPage = () => {
  const [sidebar, setSidebar] = useState(false);
  
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <section className="d-inline-block d-lg-none">
      <div className="container">
        <div className="row">
          <div className="col-9 col-sm-10 d-flex justify-content-end align-items-center">
            <div className="col-3 col-sm-2 d-flex justify-content-center">
              <div className="fullpage__bars">
                <FaBars
                  onClick={showSidebar}
                  className="fullpage__bars-icon"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${sidebar ? "fullpage__navclose fullpage" : "fullpage"}`}
      >
        <div className="container">
          <div className="col-12 my-3 text-light">
            <TiTimesOutline
              onClick={showSidebar}
              className="fullpage__close"
              style={{ cursor: "pointer" }}
            />
          </div>

          <ul className="fullpage__list">
            {navData.map((item) => {
              return (
                <li
                  key={item.id}
                  className="fullpage__list-li my-4"
                  onClick={showSidebar}
                >
                  <Link to={item.path} className="fullpage__list-link">
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
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
