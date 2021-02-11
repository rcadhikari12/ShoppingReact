import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";

class ProductList extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch("http://localhost:8080/getAllProducts")
      .then((response) => response.json())
      .then((json) => this.setState({ products: json }));
  }

  render() {
    const { products } = this.state;

    return (
      <div className="container">
        <div className="box">
          {products.map((product) => {
            return (
              <div className="card" key={product.id}>
                <Link
                  to={{
                    pathname: "/productDetails",
                    state: { product },
                  }}
                >
                  <img
                    src="https://source.unsplash.com/user/erondu/200x250"
                    alt="randomText"
                  />
                </Link>

                <div className="card-body">
                  <p>{product.name}</p>

                  <span className="badge badge-primary mb-3">
                    ${product.price}{" "}
                  </span>

                  <AddToCart product={product} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductList;
