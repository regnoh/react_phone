import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Product/Products";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import Error from "./components/Error";
import NavBar from "./components/commons/NavBar";
import Footer from "./components/commons/Footer";
import Modal from "./components/commons/Modal";
import { ProductProvider } from "./contexts/ProductContext";
const App = () => {
  return (
    <ProductProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/products" component={Products} exact />
          <Route path="/products/:slug" component={Product} exact />
          <Route path="/cart" component={Cart} exact />
          <Route component={Error} />
        </Switch>
        <Footer />
        <Modal />
      </Router>
    </ProductProvider>
  );
};

export default App;
