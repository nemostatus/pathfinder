import React, { Component } from "react";
import ls from "local-storage";
import { connect } from "react-redux";
import { updateGame } from "../actions/gamesActions";
import * as choices from "../choices";
import { StoryPage } from "./StoryPage";

class StoryBoard extends Component {
  state = {
    id: ls.get("game")["id"],
    level: ls.get("game")["level"],
    hearts: ls.get("game")["hearts"],
    name: ls.get("game")["name"],
    image: ls.get("game")["image"],
    user_id: ls.get("user_id"),
    choice1: ls.get("game")["choice1"],
    choice2: ls.get("game")["choice2"],
    prompt: ls.get("game")["prompt"],
  };
  handleClick = (event) => {
    const level = this.state.level;
    if (event.target.id === "option1" && level === "Asteroid Belt") {
      this.setState(choices.asteroidmanuever, () => {
        this.props.updateGame(this.state);
      });
    } else if (event.target.id === "option2" && level === "Asteroid Belt") {
      this.setState(choices.asteroidbeam, () => {
        this.props.updateGame(this.state);
      });
    } else if (event.target.id === "option1" && level === "Ship Wreck") {
      this.setState(choices.shipwreckthruster, () => {
        this.props.updateGame(this.state);
      });
    } else if (event.target.id === "option2" && level === "Ship Wreck") {
      this.setState(choices.shipwreckdonothing, () => {
        this.props.updateGame(this.state);
      });
    } else if (event.target.id === "option1" && level === "Low Battery") {
      this.setState(choices.lowbatterypowersave, () => {
        this.props.updateGame(this.state);
      });
    } else if (event.target.id === "option2" && level === "Low Battery") {
      this.setState(choices.lowbatteryreroute, () => {
        this.props.updateGame(this.state);
      });
    } else if (event.target.id === "option1" && level === "Final Decision") {
      this.setState(choices.finalsdecisionfire, () => {
        this.props.updateGame(this.state);
      });
    } else if (event.target.id === "option2" && level === "Final Decision") {
      this.setState(choices.finalsdecisionsignal, () => {
        this.props.updateGame(this.state);
      });
    } else if (level === "Black Hole") {
      this.setState(choices.blackhole);
    } else if (level === "Game Over") {
      this.setState(choices.gameover, () => {
        this.props.updateGame(this.state);
      });
    }
  };

  render() {
    return (
      <div>
        <StoryPage
          hearts={this.state.hearts}
          prompt={this.state.prompt}
          choice1={this.state.choice1}
          choice2={this.state.choice2}
          name={this.state.name}
          image={this.state.image}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}
export default connect(null, { updateGame })(StoryBoard);
