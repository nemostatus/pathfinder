import React, { Component } from "react";
import { connect } from "react-redux";
import { addGame } from "../actions/gamesActions";
import ls from "local-storage";

class NewGame extends Component {
  state = {
    name: "Space Adventure",
    level: "Asteroid Belt", //the current level changed with onclick events
    hearts: 5,
   image: 'https://cdn.pixabay.com/photo/2017/01/08/20/09/abstract-1963838_960_720.jpg',
    user_id: ls.get("user_id"),
    choice1: "Order the pilot to manuever through the belt",
    choice2: "Order the pilot to use the hyper-beam",
    prompt:
      "The year is 3030.You are the cpt. of a space mission to head from the mars base to establish a base on Pluto\
        With everything going to plan you hear the pilot yell out that the ships is heading toward an asteroid belt.You..",
  };

  handleClick = () => {
    this.props.addGame(this.state);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>New Game -Space Adventure! </button>
      </div>
    );
  }
}
export default connect(null, { addGame })(NewGame);
