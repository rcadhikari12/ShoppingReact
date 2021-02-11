import React from "react";
import { Link } from "react-router-dom";
import "../Css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <Link to="/home">
          {" "}
          <li>Home</li>{" "}
        </Link>
        <Link to="/signin">
          {" "}
          <li>Sign In</li>{" "}
        </Link>
        <Link to="/myCart">
          <li>MyCart </li>
        </Link>

        <Link to="/addProduct">
          <li>Add Product </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
