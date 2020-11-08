import React from "react";

export const KnightStoryPage = (props) => {
  return (
    <div className="knight">
      
 <h1 className = "knighttitle" >Knight Adventure</h1>
      <div className="hearts">
        {props.hearts} <i className="fas fa-heart" style={{ color: "red" }}></i>
      </div>

      <div className="prompt">{props.prompt}</div>

      <div id="knightoption1" className="knightoption1" onClick={props.handleClick}>
        <p> {props.choice1} </p>
      </div>

      <div id="knightoption2" className="knightoption2" onClick={props.handleClick}>
        <p>{props.choice2}</p>
      </div>
    </div>
  );
};
