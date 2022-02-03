import React from "react";

import Location from "../components/01-Header/location";
import Body from "../components/01-Header/body";
import Adds from "../components/02-Adds/adds";
import Head from "../components/03-Products/head";
import ProductAdd from "../components/04-Adds2/productAdd";
import Adds3 from "../components/06-Adds3/adds";
import Featured from "../components/07-Featured/featured";
import Chef from "../components/08-Chef/chef";
import Popular from "../components/10-Popular-Items/popular";
import Review from "../components/09-Review/review";

export default function Home() {
  return (
    <>
      <Body />
      <Location />
      <Adds />
      <ProductAdd />
      <Head />
      <Adds3 />
      <Featured />
      <Chef />
      <Popular />
      <Review />
    </>
  );
}
