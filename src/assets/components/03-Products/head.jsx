import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFetch } from "./useFetch";

import Fish from "./Items/fish";
import Chicken from "./Items/chicken";
import Pizza from "./Items/pizza";

export default function Head() {
  const { menuOne, menuTwo, menuThree, menuFour, menuFive } = useFetch();

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
                  <li onClick={menuOne} className={`${active ? "active" : ""}`}>
                    fish
                  </li>
                  <li onClick={menuTwo} className={`${two ? "active" : ""}`}>
                    chicken
                  </li>
                  <li
                    onClick={menuThree}
                    className={`${three ? "active" : ""}`}
                  >
                    pizza
                  </li>
                  <li onClick={menuFour} className={`${four ? "active" : ""}`}>
                    sweet
                  </li>
                  <li onClick={menuFive} className={`${five ? "active" : ""}`}>
                    food
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
          
          {active ? <Fish /> : ""}
          {two ? <Chicken /> : ""}
          {three ? <Pizza /> : ""}
          {four ? <Pizza /> : ""}
          {five ? <Fish /> : ""}
        </div>
      </div>
    </section>
  );
}
