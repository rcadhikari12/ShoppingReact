import React, { Component } from "react";

class Cart extends Component {
  state = {
    products: [],
    totalAmountVariable: 0,
  };

  handleRemoveItem = (index) => {
    let products = JSON.parse(localStorage.getItem("products"));
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    window.location.reload(false);
  };

  subTotalAmount = () => {
    const products = this.state.products;
    let counter = 0;

    for (var i = 0; i < products.length; i++) {
      counter = counter + products[i].price;
    }
    return counter;
  };

  componentDidMount() {
    let products = JSON.parse(localStorage.getItem("products"));
    this.setState({ products });
  }

  render() {
    const { products } = this.state;

    if (products.length === 0) {
      return <h2 className="text-center">Cart is empty!!</h2>;
    } else {
      return (
        <div>
          <div className="cart-top">
            <h1 className="mt-5 ml-5">Cart Details</h1>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Index</th>
                <th scope="col">Products Image</th>
                <th scope="col">Products</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {products.map((product, index) => {
              return (
                <tbody key={product.id}>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <img
                        src="https://source.unsplash.com/user/erondu/100x110"
                        alt="cart-value"
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>
                      <input
                        type="submit"
                        value="remove"
                        onClick={() => this.handleRemoveItem(index)}
                        className="btn btn-danger btn-sm"
                      />
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
          <div className="total-amount">
            <h5>Subtotal : $ {this.subTotalAmount()}</h5>
            <h5> Tax : $ {this.subTotalAmount() * 0.0825}</h5>
            <h5>
              Total : $ {this.subTotalAmount() + this.subTotalAmount() * 0.0825}
            </h5>
          </div>
        </div>
      );
    }
  }
}

export default Cart;
