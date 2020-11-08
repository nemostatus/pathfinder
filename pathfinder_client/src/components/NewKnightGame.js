import React, { Component } from "react";
import { connect } from "react-redux";
import { addGame } from "../actions/gamesActions";
import ls from "local-storage";

class NewKnightGame extends Component {
  state = {
    level: "Asteroid Belt", //the current level changed with onclick events
    hearts: 5,

    user_id: ls.get("user_id"),
    choice1: " Take the shortcut.",
    choice2: "  Enter through the main entrance.",
    prompt:
      "After you put up a brave and furious struggle against the goblins you grow more and more weary and \
      your vision grows blurry from exhaustion. As you defeat the last goblin you check on the damsel. \
      'You foolish knight!' She shrieks. The damsel turns to reveal herself as a goblin and knocks you out with a club.\
      You wake up to find your sword and horse have been taken and the goblins are gone! You continue toward \
      the forest to see 2 paths. One looks like the main entrance and another is a strange looking shortcut.",
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
export default connect(null, { addGame })(NewGame);
