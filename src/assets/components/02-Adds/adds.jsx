import React from "react";

import Props from "./props";

import img from "../../img/adds-01.jpg";
import img2 from "../../img/adds-02.jpg";
import img3 from "../../img/adds-03.jpg";
import Menu from "./menu";

export default function Adds() {
  return (
    <section className="adds">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-md-8 col-lg-4 m-auto">
            <Props
              Class="card adds__card text-white"
              ClassT="card-img-overlay adds__card-layer"
              img={img}
              num="20%"
              text="discount"
              name="drinks"
            />
          </div>
          <div className="col-sm-10 col-md-8 col-lg-4 m-auto my-5 my-lg-0">
            <Props
              Class="card adds__card text-white"
              ClassT="card-img-overlay adds__card-layer"
              img={img2}
              num="10%"
              text="discount"
              name="cakes"
            />
          </div>
          <div className="col-sm-10 col-md-8 col-lg-4 m-auto">
            <Props
              Class="card adds__card text-white"
              ClassT="card-img-overlay adds__card-layer"
              img={img3}
              num="30%"
              text="discount"
              name="coffe"
            />
          </div>
        </div>
        <div className="row">
          <Menu />
        </div>
      </div>
    </section>
  );
}
