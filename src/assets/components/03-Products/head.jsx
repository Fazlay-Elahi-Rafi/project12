import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFetch } from "./useFetch";
import currencyFormatter from "currency-formatter";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

export default function Head() {
  const { menuOne, menuTwo, menuThree, menuFour, menuFive } = useFetch();
  const [quantity, setQuantity] = useState(1);
  const { data } = useSelector((state) => state.ProductsReducer);
  const [value, setVal] = useState(data);

  const filterItem = (category) => {
    const updateItem = data.filter((curElm) => {
      return curElm.type === category;
    });
    setVal(updateItem);
  };

  const { msg, hideMsg } = useSelector((state) => state.CartReducer);
  const { active, two, three, four, five } = useSelector(
    (state) => state.MenuReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => {
      dispatch({ type: "HIDE_ALERT" });
    }, 3500);
  }, []);

  return (
    <section className="head">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="head__nav">
              <div className="">
                <h3 className="head__nav-title">top products</h3>
              </div>
              <div className="">
                <ul className="head__nav-list">
                  <li onClick={() => setVal(data)}>
                    <span
                      onClick={menuOne}
                      className={`${active ? "active" : ""}`}
                    >
                      all
                    </span>
                  </li>
                  <li onClick={() => filterItem("fish")}>
                    <span
                      className={`${two ? "active" : ""}`}
                      onClick={menuTwo}
                    >
                      fish
                    </span>
                  </li>
                  <li onClick={() => filterItem("chicken")}>
                    <span
                      className={`${three ? "active" : ""}`}
                      onClick={menuThree}
                    >
                      chicken
                    </span>
                  </li>
                  <li onClick={() => filterItem("pizza")}>
                    <span
                      className={`${four ? "active" : ""}`}
                      onClick={menuFour}
                    >
                      pizza
                    </span>
                  </li>
                  <li onClick={menuFive}>
                    <span
                      className={`${five ? "active" : ""}`}
                      onClick={menuFive}
                    >
                      sweet
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className={`${hideMsg ? "head__alert" : " head__hide"}`}
            role="alert"
          >
            {msg}
          </div>

          {value.map((product) => (
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
        </div>
      </div>
    </section>
  );
}
