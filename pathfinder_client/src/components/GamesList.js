import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ls from "local-storage";
import NewKnightGame from "./NewKnightGame";
import NewGame from "./NewGame";

const GamesList = ({ games }) => {
  return (
    <div>
      <NewGame />
       <NewKnightGame/>
      <h1> Click to load file </h1>
      {games.map((game) => (
        <div
          className="list"
          key={game.id}
          onClick={() => ls.set("game", game)}
        >
         {if(game.level === "Asteroid Belt") <Link to={"/storyboard"} key={game.id}>
            level- {game.level}{" "}
          </Link>}
          else if({game.level === "Damsel"}) {<Link to={"/knightstoryboard"} key={game.id}>
            level- {game.level}{" "}
          </Link>}
          <br />

          {game.hearts}
          <i className="fas fa-heart" style={{ color: "red" }}></i>
          <br />

          {/* <button onClick={deleteGame(game)} >Delete File</button>  */}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { games: state.games };
};

export default connect(mapStateToProps)(GamesList);
