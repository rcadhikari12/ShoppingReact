import React, { Component } from "react";

class SignIn extends Component {
  state = {
    username: "",
    password: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          Username
          <br />
          <input type="text" value={username} onChange={this.handleUsername} />
          <br />
          <br />
          Password
          <br />
          <input
            type="password"
            value={password}
            onChange={this.handlePassword}
          />
          <br />
          <input
            type="submit"
            value="Log in"
            className="btn btn-success btn-sm m-5"
          />
        </form>
      </div>
    );
  }
}

export default SignIn;
