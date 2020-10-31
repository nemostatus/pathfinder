import React from "react";
import Router from "./Router";

import Navbar from "./Navbar";
import Login from "./Login";
import Registration from "./Registration";

import ls from "local-storage";

import { connect } from "react-redux";

const App = (props) => {
  let id = ls.get("user_id");
  if (id === null || id === "undefined" || props.users === null) {
    return (
      <div>
        <Login />
        <Registration />
     
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <Router />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps)(App);
