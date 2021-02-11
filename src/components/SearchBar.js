import React, { Component } from "react";
import "../Css/Navbar.css";
import { Link } from "react-router-dom";

class SearchBar extends Component {
  state = {
    search: "",
    items: [],
  };

  handleSearch = (event) => {
    event.preventDefault();
    const search = this.state.search;

    fetch(`http://localhost:8080/searchProducts/${search}`)
      .then((response) => response.json())
      .then((data) => this.setState({ items: data }));
  };

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    const { search, items } = this.state;

    return (
      <div>
        <div className="searchbar">
          <form
            className="form-inline my-2 my-lg-0 align-center"
            onSubmit={this.handleSearch}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={this.handleChange}
            />

            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <div>
          {items.map((product) => {
            return (
              <div className="search-list" key={product.id}>
                <Link to={{ pathname: "/productDetails", state: { product } }}>
                  {product.name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SearchBar;
