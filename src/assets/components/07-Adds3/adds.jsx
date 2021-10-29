import React from "react";

import img from "../../img/bn-sm.jpg";

export default function Adds() {
  return (
    <section className="adds3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card adds3__card">
              <div className="adds3__card-img">
                <img src={img} className="" alt="img" />
              </div>
              <div className="card-img-overlay adds3__card-layer">
                <div className="">
                  <h5 className="adds3__card-title">
                    fresh & delicious
                    <br className="d-none d-sm-block" /> food
                  </h5>
                  <p className="adds3__card-text">Fazlay elahi rafi</p>
                  <button className="btn adds3__card-btn">order now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
