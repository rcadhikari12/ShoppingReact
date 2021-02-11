import React, { Component } from "react";
import axios from "axios";

class AddProduct extends Component {
  state = {
    name: "",
    price: null,
    description: "",
    imageUrl: "",
    selectedFile: null,
    successMsg: "",
    productAdddedMsg: "",
    validationError: false,
  };

  handleName = (event) => {
    this.setState({ name: event.target.value });
  };

  handlePrice = (event) => {
    this.setState({ price: event.target.value });
  };

  handleDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  handleUploadChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  handleUpload = (event) => {
    event.preventDefault();
    const file = new FormData();
    file.append("file", this.state.selectedFile);

    axios
      .post("http://localhost:8080/uploadFile", file, {})
      .then((response) => {
        this.setState({
          successMsg: "Uploaded Successfully",
          imageUrl: response.data,
        });
      });
  };

  handleAddProduct = (event) => {
    event.preventDefault();

    if (
      this.state.name === "" ||
      this.state.price === null ||
      this.state.description === "" ||
      this.state.selectedFile === null
    ) {
      this.setState({ validationError: true });
    } else {
      axios.post("http://localhost:8080/addProduct", {
        name: this.state.name,
        price: this.state.price,
        description: this.state.description,
        imageUrl: this.state.imageUrl,
      });
      this.setState({
        productAdddedMsg: "Product Addeded Successfully!",
        validationError: false,
      });

      window.location.reload(false);
    }
  };

  render() {
    const {
      name,
      price,
      description,
      imageUrl,
      successMsg,
      productAdddedMsg,
      validationError,
    } = this.state;
    return (
      <div className="form-addproduct mt-5">
        <h2 className="text-center">Add a Product </h2>
        <form>
          Name of Product <br />
          <input
            type="text"
            value={name}
            onChange={this.handleName}
            required
          />{" "}
          <br />
          Price of Product(USD)
          <br />
          <input
            type="number"
            value={price}
            onChange={this.handlePrice}
            required
          />{" "}
          <br />
          Description of Product
          <br />
          <textarea
            rows="4"
            cols="50"
            value={description}
            onChange={this.handleDescription}
            required
          />
          <br />
          <br />
          <input
            type="file"
            name="file"
            onChange={this.handleUploadChange}
            required
          />
          <input
            type="button"
            value="Upload"
            onClick={this.handleUpload}
            className="btn btn-warning"
          />
          {successMsg.length !== 0 ? (
            <div className="text-primary"> {successMsg} </div>
          ) : null}
        </form>
        <br />
        <input
          type="submit"
          value="Add Product"
          onClick={this.handleAddProduct}
          className="btn btn-success"
        />

        {productAdddedMsg.length !== 0 ? (
          <div className="text-primary"> {productAdddedMsg} </div>
        ) : null}

        <br />
        {validationError ? (
          <p className="text-danger">One or more empty fields...</p>
        ) : null}
      </div>
    );
  }
}

export default AddProduct;
