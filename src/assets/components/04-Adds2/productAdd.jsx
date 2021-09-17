import React from "react";

import add01 from "../../img/add-01.jpg";
import add02 from "../../img/add-02.jpg";
import add03 from "../../img/add-03.jpg";
import add04 from "../../img/add-04.jpg";

import Props from "./props";

export default function ProductAdd() {
  return (
    <section className="productAdd">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6 mb-4 mb-lg-0">
            <Props
              classTwo="productAdd__card-one"
              classThree="img-fluid productAdd__card-img"
              classFour="card-img-overlay productAdd__card-layer--first"
              classFive="productAdd__card-title"
              classSix="productAdd__card-text"
              classSaven="productAdd__card-price"
              img={add01}
              title="more delicious dishes"
              text="Get 25% off fried food"
              price="$20"
            />
          </div>

          <div className="col-sm-6 col-lg-3 mb-4 mb-sm-0">
            <div className="row justify-content-center">
              <div className="col-12 productAdd__card-col">
                <div className="card productAdd__card">
                  <Props
                    classTwo="productAdd__card-two"
                    classThree="img-fluid productAdd__card-img3"
                    classFour="card-img-overlay productAdd__card-layer"
                    classFive="productAdd__card-title2"
                    classSix="productAdd__card-text2"
                    classSaven="productAdd__card-price2"
                    img={add02}
                    title="new dishes"
                    text="kfc chicken"
                    price="$10"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="card productAdd__card">
                  <Props
                    classTwo="productAdd__card-three"
                    classThree="img-fluid productAdd__card-img3"
                    classFour="card-img-overlay productAdd__card-layer"
                    classFive="productAdd__card-title2"
                    classSix="productAdd__card-text2"
                    classSaven="productAdd__card-price2"
                    img={add03}
                    title="only for today"
                    text="potato fries"
                    price="$15"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card productAdd__card">
              <Props
                classTwo="productAdd__card-four"
                classThree="img-fluid productAdd__card-img2"
                classFour="card-img-overlay productAdd__card-layer--last"
                classFive="productAdd__card-title"
                classSix="productAdd__card-text"
                classSaven="productAdd__card-price"
                img={add04}
                title="double meat"
                text="beef burger"
                price="$18"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
