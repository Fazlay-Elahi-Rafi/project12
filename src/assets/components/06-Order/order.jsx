import React from "react";

import Props from "./props";

import img from "../../img/add-05.jpg";
import img2 from "../../img/add-06.jpg";

export default function Order() {
  return (
    <section className="order d-md-flex justify-content-between">
      <div className="col-12 col-md-5 mb-5 mb-md-0">
        <Props
          classO="card order__card"
          classT="mg-fluid order__img"
          classTh="card-img-overlay order__layer"
          classF="order__body col-sm-10 col-md-12 col-xl-10"
          img={img}
          title="create your own pizza"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit.Recusandae autem voluptatum, deleniti necessitatibus sunt."
          btnText="order now"
        />
      </div>
      <div className="col-12 col-md-5">
        <Props
          classO="card order__card"
          classT="mg-fluid order__img2"
          classTh="card-img-overlay order__layer2"
          classF="order__body col-sm-10 col-md-12 col-xl-10"
          img={img2}
          title="create your own food"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit.Recusandae autem voluptatum, deleniti necessitatibus sunt."
          btnText="order now"
        />
      </div>
    </section>
  );
}
