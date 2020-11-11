import React, { Component } from "react";
import { connect } from "react-redux";
import { addGame } from "../actions/gamesActions";
import ls from "local-storage";

class NewKnightGame extends Component {
  state = {
    level: "Damsel", //the current level changed with onclick events
    hearts: 5,
    name: "Knight Adventure",
    image: "https://cdn.pixabay.com/photo/2020/07/07/15/38/downton-abbey-5380907_960_720.jpg",
    user_id: ls.get("user_id"),
    choice1: " Continue to the forest.",
    choice2: "  Save the damsel!",
    prompt:
      "You are requested by the king to save the princess stolen away in the middle of the night. You head out swiftly \
      on your horse heading toward the mysterious forest. Right before you enter the forest you see a damsel in distress\
      being atacked by goblins! You...",
  };

  handleClick = () => {
    this.props.addGame(this.state);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>New Game -Knight Adventure! </button>
      </div>
    );
  }
}
export default connect(null, { addGame })(NewKnightGame);
