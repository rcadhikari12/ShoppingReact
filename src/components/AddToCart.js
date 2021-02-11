import React, { Component } from "react";

class AddToCart extends Component {
  state = {};

  handleClick = (event) => {
    event.preventDefault();
    const product = this.props.product;

    let existingProducts = JSON.parse(localStorage.getItem("products"));

    if (existingProducts === null) {
      existingProducts = [];
    }

    existingProducts.push(product);
    localStorage.setItem("products", JSON.stringify(existingProducts));
    alert("Product added to cart.");
  };

  render() {
    return (
      <input
        type="submit"
        value="Add to Cart"
        className="btn btn-warning btn-sm"
        onClick={this.handleClick}
      />
    );
  }
}

export default AddToCart;
