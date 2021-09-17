import React from "react";

export default function Props(props) {
  return (
    <>
      <div className="row g-0">
        <div className="col-md-4 text-center d-block d-md-none">
          <img
            src={props.img}
            className="img-fluid"
            alt="img"
          />
        </div>
        <div className="col-md-7 pt-md-5">
          <div className="body__card">
            <h1 className="body__card-title">{props.title}</h1>
          </div>
        </div>
        <div className="col-md-4 text-center d-none d-md-block">
          <img
            src={props.img}
            className="img-fluid"
            alt="img"
            style={{ margin: "0 0 0 4rem" }}
            // style={{ margin: "0 0 0 11rem" }}
          />
        </div>
      </div>
    </>
  );
}
