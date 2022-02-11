import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import webFont from "webfontloader";

// Pages
import Home from "./assets/page/home";
import About from "./assets/page/about";
import Cart from "./assets/page/cart";
import Contact from "./assets/page/contact";
import Product from "./assets/page/product";
import Navbar from "./assets/components/01-Header/navbar";
import Details from "./assets/components/03-Products/details";
import ItemDetails from "./assets/components/07-Featured/itemDetails";
import Footer from "./assets/components/12-Footer/footer";

// Redux
import { Provider } from "react-redux";
import store from "./assets/redux/store";

export default function App() {
  useEffect(() => {
    webFont.load({
      google: {
        families: ["Varela Round", "Nunito Sans"],
      },
    });
  }, []);

  return (
    <>
      <Router>
        <Provider store={store}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/cart" component={Cart} />
            <Route path="/contact" component={Contact} />
            <Route path="/details/:id" exact component={Details} />
            <Route path="/itemdetails/:id" exact component={ItemDetails} />
            <Route path="/product" exact component={Product} />
          </Switch>
          <Footer />
        </Provider>
      </Router>
    </>
  );
}
