import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { FaShoppingCart } from "react-icons/fa";
import Search from "./search";

import logo from "../../img/logo.png";
import FullPage from "./fullpage";

export default function Navbar() {
  const { totalQuantities } = useSelector((state) => state.CartReducer);

  return (
    <nav className="navbar navbar-expand navbar-light nav">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} className="img-fluid nav__logo" alt="logo" />
        </a>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav m-auto nav__list d-none d-lg-flex">
            <li className="nav-item">
              <Link to="/" className="nav-link nav__active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link nav__link">
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className="nav-link nav__link">
                product
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link nav__link">
                cart
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link nav__link">
                contact us
              </Link>
            </li>
          </ul>
          <div className="">
            <div className="nav__search">
              <Search />
            </div>
            <Link to="/cart" href="#" className="nav__cart">
              <FaShoppingCart className="nav__cart-icon" />
              <span className="nav__cart-num">{totalQuantities}</span>
            </Link>
            <button className="btn nav__sign d-none d-lg-inline">
              sign up
            </button>
            <FullPage />
          </div>
        </div>
      </div>
    </nav>
  );
}
