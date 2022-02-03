import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

import logo from "../../img/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-9 col-md-6 col-lg-5 col-xl-4 mb-5 mb-xl-0">
            <div className="col-8">
              <a className="footer__logo" href="#">
                <img className="img-fluid w-50" src={logo} alt="logo" />
              </a>
            </div>
            <p className="footer__para">
              We are a team of designers and developers that create high quality
              Magento, Prestashop, Opencart
            </p>
            <div className="col-4 footer__social">
              <ul>
                <li>
                  <a href="#">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-2 col-xl-2 mb-5 mb-xl-0">
            <div className="">
              <h3 className="footer__sub">service</h3>
            </div>
            <div className="">
              <ul className="footer__itemO">
                <li>
                  <a className="footer__itemO-link" href="#">
                    about
                  </a>
                </li>
                <li>
                  <a className="footer__itemO-link" href="#">
                    support
                  </a>
                </li>
                <li>
                  <a className="footer__itemO-link" href="#">
                    Term & Condition
                  </a>
                </li>
                <li>
                  <a className="footer__itemO-link" href="#">
                    Privecy & Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-5 mb-xl-0">
            <h3 className="footer__sub">contact</h3>
            <ul className="footer__ul">
              <li className="footer__list">
                <BiCurrentLocation className="footer__icon" />
                <a className="footer__link" href="#">
                  Tongi,Gazipur
                </a>
              </li>
              <li className="footer__list">
                <HiOutlineMailOpen className="footer__icon" />
                <a className="footer__link" href="#">
                  fazlayrafi2001@gmail.com
                </a>
              </li>
              <li className="footer__list">
                <FiPhone className="footer__icon" />
                <a className="footer__link" href="#">
                  +8801828481501
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-8 col-md-6 col-lg-6 col-xl-3 mb-5 mb-xl-0">
            <h3 className="footer__sub">send mail</h3>
            <div className="footer__submit">
              <input
                className="footer__submit-inp form-control"
                type="text"
                placeholder="Your Email..."
              />
              <button className="btn footer__submit-btn">send</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 text-center footer__bottom">
        <p className="m-0 footer__bottom-para">
          &copy; Design By
          <span>
            <span className="mx-2">2021, MD.RAFI</span>
          </span>
        </p>
      </div>
    </footer>
  );
}
