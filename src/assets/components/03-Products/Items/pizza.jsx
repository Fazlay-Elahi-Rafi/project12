import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import currencyFormatter from "currency-formatter";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

const Pizza = () => {
  const { pizza } = useSelector((state) => state.ProductsReducer);

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  return (
    <>
      {pizza.map((product) => (
        <div className="col-sm-6 col-lg-4 col-xl-3 mb-5" key={product.id}>
          <div className="card head__card">
            <div className="head__card-image">
              <Link to={`/details/${product.id}`}>
                <div className="">
                  <FaRegEye className="head__card-icon" />
                </div>
                <img
                  className="img-fluid head__card-items--img"
                  src={`${product.image}`}
                  alt="image name"
                />
              </Link>
            </div>
            <div className="card-body">
              <h5 className="head__card-title">{product.name}</h5>
              <p className="head__card-text">{product.desc}</p>
              <div className="head__card-price">
                <div className="">
                  <span className="head__card-price--disc">
                    {currencyFormatter.format(product.price, {
                      code: "USD",
                    })}
                  </span>
                  <span className="head__card-price--span">
                    {product.discount}%
                  </span>
                </div>
                <div className="">
                  <span className="head__card-price--num">
                    {currencyFormatter.format(product.discountPrice, {
                      code: "USD",
                    })}
                  </span>
                </div>
              </div>
              <button
                className="btn form-control head__card-btn"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: { product, quantity },
                  })
                }
              >
                <TiShoppingCart className="head__card-btn--icon" />
                add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pizza;
