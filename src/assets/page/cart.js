import React from "react";
import { useSelector, useDispatch } from "react-redux";
import currencyFormatter from "currency-formatter";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiDeleteBin7Line,
} from "react-icons/ri";
import { BsReverseBackspaceReverse } from "react-icons/bs";

const Cart = () => {
  const { products, totalQuantities, totalPrice } = useSelector(
    (state) => state.CartReducer
  );
  const dispatch = useDispatch();

  return (
    <section className="cart">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="cart__title text-center text-md-start">
              shopping cart
            </h1>
          </div>
        </div>
        {products.length > 0 ? (
          <>
            <div className="row">
              <div className="col-12 col-lg-9">
                <div className="cart__heading d-none d-md-block">
                  <div className="row">
                    <div className="col-6">
                      <span className="cart__heading-type">item</span>
                    </div>
                    <div className="col-2 text-center text-center text-lg-start text-xl-center text-xxl-start">
                      <span className="cart__heading-type">Price</span>
                    </div>
                    <div className="col-2 text-center text-lg-start text-xl-center text-xxl-start">
                      <span className="cart__heading-type">quantity</span>
                    </div>
                    <div className="col-2 text-center text-lg-start text-xl-center">
                      <span className="cart__heading-type ">Total Price</span>
                    </div>
                  </div>
                </div>
                {products.map((product) => (
                  <div
                    className="row align-items-center d-block d-md-flex"
                    key={product.id}
                  >
                    <div className="col-12 col-sm-10 col-md-3 m-auto mb-3">
                      <div className="cart__image">
                        <img
                          className="img-fluid"
                          src={`${product.image}`}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-3 m-auto col-lg-2">
                      <h4 className="cart__name">{product.name}</h4>
                      <span className="cart__category">
                        category: {product.category}
                      </span>
                    </div>
                    <div className="col-10 col-md-2 m-auto float-start float-sm-none text-md-center py-3 py-md-0">
                      <div className="cart__price">
                        {currencyFormatter.format(product.discountPrice, {
                          code: "USD",
                        })}
                      </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-2 m-auto d-flex align-items-center justify-content-start justify-content-md-center">
                      <div className="cart__count">
                        <span
                          className="cart__count-dec"
                          onClick={() =>
                            dispatch({ type: "DEC", payload: product.id })
                          }
                        >
                          <RiArrowLeftSLine />
                        </span>
                        <span className="cart__count-quantity px-2 px-md-3">
                          {product.quantity}
                        </span>
                        <span
                          className="cart__count-inc"
                          onClick={() =>
                            dispatch({ type: "INC", payload: product.id })
                          }
                        >
                          <RiArrowRightSLine />
                        </span>
                      </div>
                    </div>
                    <div className="col-2 d-none d-md-flex justify-content-md-center">
                      <h6 className="cart__total text-center">
                        {currencyFormatter.format(
                          product.discountPrice * product.quantity,
                          { code: "USD" }
                        )}
                      </h6>
                    </div>
                    <div className="col-12 text-end">
                      <RiDeleteBin7Line
                        className="cart__remove"
                        onClick={() =>
                          dispatch({ type: "REMOVE", payload: product.id })
                        }
                      />
                    </div>
                    <hr className="cart__hr" />
                  </div>
                ))}
              </div>
              <div className="col-12 col-lg-3">
                <div className="cart__summary">
                  <h5 className="cart__summary-heading">order summary</h5>
                  <div className="cart__summary-details">
                    <div className="col-12 d-flex mb-3">
                      <div className="col-6 cart__summary-details--text">
                        Total Items:
                      </div>
                      <div className="col-6 text-center cart__summary-details--num">
                        {totalQuantities}
                      </div>
                    </div>
                    <div className="col-12 d-flex">
                      <div className="col-6 cart__summary-details--text">
                        Total Price
                      </div>
                      <div className="col-6 text-center cart__summary-details--num">
                        {currencyFormatter.format(totalPrice, { code: "USD" })}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn form-control cart__summary-details--btn"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          "Your cart is empty!"
        )}
      </div>
    </section>
  );
};

export default Cart;
