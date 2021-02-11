import React from "react";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import MyCart from "./components/Cart";
import AddProduct from "./components/AddProduct";
import landingPage from "./components/LandingPage";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/" exact component={landingPage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/productDetails" component={ProductDetails} />
          <Route path="/myCart" exact component={MyCart} />
          <Route path="/addproduct" exact component={AddProduct} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
