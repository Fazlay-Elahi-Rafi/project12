import React from "react";

import Location from "../components/01-Header/location";
import Body from "../components/01-Header/body";
import Adds from "../components/02-Adds/adds";
import Head from "../components/03-Products/head";
import ProductAdd from "../components/04-Adds2/productAdd";
import Order from "../components/06-Order/order";

export default function Home() {
  return (
    <>
      <Body />
      <Location />
      <Adds />
      <Head />
      <ProductAdd />
      <Order />
    </>
  );
}
