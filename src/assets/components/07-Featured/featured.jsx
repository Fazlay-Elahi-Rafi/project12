import React from "react";
import { useSelector, useDispatch } from "react-redux";
import currencyFormatter from "currency-formatter";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";

export default function Featured() {
  const { item } = useSelector((state) => state.ProductsReducer);

  return (
    <section className="featured">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="featured__title">featured products</h2>
            <span className="featured__span">
              add featured products to weakly line up
            </span>
          </div>
        </div>

        <div className="row">
            {item.map((items) => (
              <div className="col-sm-6 col-lg-4 mb-4" key={items.id}>
                <div className="card featured__items">
                  <div className="row">
                    <div className="col-md-4 m-auto">
                      <div className="featured__items-image">
                        <Link to={`/itemdetails/${items.id}`}>
                          <div className="">
                            <FaRegEye className="featured__items-icon" />
                          </div>
                          <img
                            className="img-fluid featured__items-img"
                            src={`${items.image}`}
                            alt="image name"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <span className="featured__items-comp">
                          {items.comp}
                        </span>
                        <h4 className="featured__items-name">{items.name}</h4>
                        <div className="head__card-price">
                          <div className="">
                            <span className="featured__items-price--disc">
                              {currencyFormatter.format(items.price, {
                                code: "USD",
                              })}
                            </span>
                            <span className="featured__items-price--span">
                              {items.discount}%
                            </span>
                          </div>
                          <div className="">
                            <span className="featured__items-price--num">
                              {currencyFormatter.format(items.discountPrice, {
                                code: "USD",
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
