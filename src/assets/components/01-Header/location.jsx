import React from "react";

export default function Location() {
  return (
    <section className="location">
      <div className="container">
        <div className="row justify-content-center justify-content-sm-start">
          <div className="col-11 col-lg-8 col-xl-7 col-xxl-6 d-md-flex location__body">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <input
                className="form-control location__body-inp"
                type="text"
                placeholder="Enter Your Post Code"
              />
            </div>
            <div className="col-12 col-md-6 text-center d-sm-flex justify-content-center justify-content-md-end">
              <button className="btn location__body-btnO">
                delivery
              </button>
              <button className="btn location__body-btnT">pick up</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 p-sm-0">
            <button className="btn location__view">view food menu</button>
          </div>
        </div>
      </div>
    </section>
  );
}
