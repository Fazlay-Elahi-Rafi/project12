import React from "react";

import { FiMail, FiPhoneCall } from "react-icons/fi";
import { FaGooglePlusG, FaTwitter, FaFacebookF, FaRss } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-12 col-md-5 pt-md-3 pt-lg-4">
            <div className="mb-5">
              <ul className="contact__list">
                <li>
                  <h3 className="contact__place">office at america</h3>
                </li>
                <li>
                  <h3 className="contact__comp">basement company, new york</h3>
                </li>
                <li className="mb-1">
                  <span className="contact__contact">
                    <FiMail className="contact__icon" /> enquiry@bakery.com
                  </span>
                </li>
                <li>
                  <span className="contact__contact">
                    <FiPhoneCall className="contact__icon" />
                    +88018xxxxxxx
                  </span>
                </li>
              </ul>
              <div className="contact__social">
                <div className="col-4 col-md-5 col-xl-3">
                  <ul className="contact__social-list">
                    <li>
                      <a className="contact__social-link" href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a className="contact__social-link" href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a className="contact__social-link" href="#">
                        <FaGooglePlusG />
                      </a>
                    </li>
                    <li>
                      <a className="contact__social-link" href="#">
                        <FaRss />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="">
              <ul className="contact__list">
                <li>
                  <h3 className="contact__place">office at america</h3>
                </li>
                <li>
                  <h3 className="contact__comp">basement company, new york</h3>
                </li>
                <li className="mb-1">
                  <span className="contact__contact">
                    <FiMail className="contact__icon" /> enquiry@bakery.com
                  </span>
                </li>
                <li>
                  <span className="contact__contact">
                    <FiPhoneCall className="contact__icon" />
                    +88018xxxxxxx
                  </span>
                </li>
              </ul>
              <div className="contact__social">
                <div className="col-4 col-md-5 col-xl-3">
                  <ul className="contact__social-list">
                    <li>
                      <a className="contact__social-link" href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a className="contact__social-link" href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a className="contact__social-link" href="#">
                        <FaGooglePlusG />
                      </a>
                    </li>
                    <li>
                      <a className="contact__social-link" href="#">
                        <FaRss />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 mt-5 mt-md-0">
            <form className="contact__form">
              <div className="">
                <input
                  className="contact__form-inp form-control"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="my-3">
                <input
                  className="contact__form-inp form-control"
                  type="email"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-3">
                <input
                  className="contact__form-inp form-control"
                  type="number"
                  placeholder="+880"
                />
              </div>
              <div className="">
                <textarea
                  className="form-control contact__form-inp"
                  cols="30"
                  rows="6"
                  placeholder="Text your message here..."
                ></textarea>
              </div>
              <button className="btn contact__form-btn form-control">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
