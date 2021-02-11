import React, { Component } from "react";
import "../Css/Navbar.css";
import Review from "./Review";
import AddToCart from "./AddToCart";

class ProductDetails extends Component {
  render() {
    const { product } = this.props.location.state;
    return (
      <div>
        <div className="productDetails-container">
          <div>
            <img
              src="https://source.unsplash.com/user/erondu/400x470"
              alt="randomText"
            />
          </div>

          <div className="productDescription">
            <h3>{product.name}</h3>
            <h5>USD ${product.price}</h5>
            <p>{product.description}</p>
            <br />
            <AddToCart product={product} />
          </div>
        </div>

        <Review productId={product.id} />
      </div>
    );
  }
}

export default ProductDetails;
