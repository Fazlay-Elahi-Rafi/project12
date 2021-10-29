import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import img from "../../img/chef-01.jpg";
import img2 from "../../img/chef-02.jpg";
import img3 from "../../img/chef-03.jpg";

export default function Chef() {
  return (
    <section className="chef">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="chef__title">our special chefs</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="card chef__card">
              <div className="chef__card-img">
                <div className="chef__card-social">
                  <ul className="chef__card-social--list">
                    <li>
                      <FaFacebookF />
                    </li>
                    <li>
                      <FaTwitter />
                    </li>
                    <li>
                      <FaInstagram />
                    </li>
                  </ul>
                </div>
                <img src={img} className="img-fluid" alt="img" />
              </div>
              <div className="chef__card-body text-center">
                <h5 className="chef__card-body--title">fazlay rafi</h5>
                <p className="chef__card-body--text">assistant chef</p>
                <hr className="chef__card-body--hr" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card chef__card">
              <div className="chef__card-img">
                <div className="chef__card-social">
                  <ul className="chef__card-social--list">
                    <li>
                      <FaFacebookF />
                    </li>
                    <li>
                      <FaTwitter />
                    </li>
                    <li>
                      <FaInstagram />
                    </li>
                  </ul>
                </div>
                <img src={img2} className="img-fluid" alt="img" />
              </div>
              <div className="chef__card-body text-center">
                <h5 className="chef__card-body--title">md rafi</h5>
                <p className="chef__card-body--text">assistant chef</p>
                <hr className="chef__card-body--hr" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card chef__card">
              <div className="chef__card-img">
                <div className="chef__card-social">
                  <ul className="chef__card-social--list">
                    <li>
                      <FaFacebookF />
                    </li>
                    <li>
                      <FaTwitter />
                    </li>
                    <li>
                      <FaInstagram />
                    </li>
                  </ul>
                </div>
                <img src={img3} className="img-fluid" alt="img" />
              </div>
              <div className="chef__card-body text-center">
                <h5 className="chef__card-body--title">fazlay elahi rafi</h5>
                <p className="chef__card-body--text">assistant chef</p>
                <hr className="chef__card-body--hr" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
