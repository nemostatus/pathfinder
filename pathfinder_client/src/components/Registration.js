import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/usersActions";
import { withRouter } from "react-router";

class Registration extends Component {
  state = {
    username: "",
    password: "",
    password_confirmation: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1> Sign Up </h1>
        <form onSubmit={this.handleSubmit}>
          <label>Astronaut Name(will be shown as a link to your profile)</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
            name="username"
          ></input>
          <br />
          <label>Password:</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
          ></input>
          <br />
          <label>Password Confirmation:</label>
          <input
            type="password"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            name="password_confirmation"
          ></input>
          <br />

          <input type="submit" value="create user"></input>
        </form>
      </div>
    );
  }
}

export default withRouter(connect(null, { addUser })(Registration));
