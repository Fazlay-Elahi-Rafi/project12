import React from "react";

import Location from "../components/01-Header/location";
import Body from "../components/01-Header/body";
import Adds from "../components/02-Adds/adds";
import Head from "../components/03-Products/head";
import ProductAdd from "../components/04-Adds2/productAdd";
import Order from "../components/06-Order/order";
import Featured from "../components/08-Featured/featured";
import Adds3 from "../components/07-Adds3/adds";
import Chef from "../components/09-Chef/chef";

export default function Home() {
  return (
    <>
      <Body />
      <Location />
      <Adds />
      <Head />
      <ProductAdd />
      <Order />
      <Adds3 />
      <Featured />
      <Chef />
    </>
  );
}
