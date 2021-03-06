import React from "react";

export const StoryPage = (props) => {
  return (
    <div className="page" style= {{backgroundImage: `url(${props.image})`}}>
      
 <h1 className = "pagetitle" >{props.name}</h1>
      <div className="hearts">
        {props.hearts} <i className="fas fa-heart" style={{ color: "red" }}></i>
      </div>

      <div className="prompt">{props.prompt}</div>

      <div id="option1" className="option1" onClick={props.handleClick}>
        <p> {props.choice1} </p>
      </div>

      <div id="option2" className="option2" onClick={props.handleClick}>
        <p>{props.choice2}</p>
      </div>
    </div>
  );
};
