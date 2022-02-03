import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import img from "../../img/chef-01.jpg";
import img2 from "../../img/chef-02.jpg";
import img3 from "../../img/chef-03.jpg";

import Props from "./props";

export default function Chef() {
  return (
    <section className="chef">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="chef__title">our special chefs</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <Props
              Fb={<FaFacebookF />}
              Tw={<FaTwitter />}
              Ins={<FaInstagram />}
              img={img}
              title="fazlay rafi"
              text="assistant chef"
            />
          </div>
          <div className="col-sm-6 col-lg-3">
            <Props
              Fb={<FaFacebookF />}
              Tw={<FaTwitter />}
              Ins={<FaInstagram />}
              img={img2}
              title="md rafi"
              text="assistant chef"
            />
          </div>
          <div className="col-sm-6 col-lg-3">
            <Props
              Fb={<FaFacebookF />}
              Tw={<FaTwitter />}
              Ins={<FaInstagram />}
              img={img3}
              title="fazlay elahi"
              text="assistant chef"
            />
          </div>
          <div className="col-sm-6 col-lg-3">
            <Props
              Fb={<FaFacebookF />}
              Tw={<FaTwitter />}
              Ins={<FaInstagram />}
              img={img}
              title="fazlay elahi"
              text="assistant chef"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
