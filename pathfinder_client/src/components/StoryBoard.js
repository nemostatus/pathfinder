import React, { Component } from 'react'
import ls from 'local-storage'
import {connect} from 'react-redux'
import {goblinAttack} from '../actions/gamesActions'
import {choices} from '../choices'



 class StoryBoard extends Component {
        
       state = {
        id: ls.get('game')["id"], //getting the level by its id to be used for rails requests
        level: ls.get('game')["level"], //the current level changed with onclick events
        hearts: ls.get('game')["hearts"],

        user_id: ls.get('user_id'),
        choice1: ls.get('game')["choice1"],
        choice2: ls.get('game')["choice2"],
        prompt: ls.get('game')["prompt"]
        }
        handleClick = ( event) => {
     // take in the current level so when invoked it will be 
     //have a case statement that will setState, invoke an action based on this.state.level and event.value
    
     const level = this.state.level
     if(event.target.id === "option1" && level === "1" ) {
     //lose 2 hearts, change level to 2, change prompt and choice1,2
   
     this.setState(choices, () => { this.props.goblinAttack(this.state)})

               
}
     else if(event.target.id === "option2" && level === "1" ){
        this.setState(
       choices
       
   
        )
     }
     //send this state to an action that will update the current game

        }

       
    render() {
        return (
            
            <div>
                                
           <div className = "hearts" >
           {this.state.hearts} <i className="fas fa-heart" style={{color:"red"}}></i> 
               </div>

               <div className = "prompt" >
           {this.state.prompt}
           
               </div>
                        
           <div id = "option1" className = "option1" onClick={this.handleClick} >
           {this.state.choice1}
           {/* Save the damsel! */}
           {/* <button value = "a" onClick={this.handleClick(this.state.level)}>Choose this</button> */}
               </div>

             <div id= "option2" className = "option2" onClick={this.handleClick} >
             {this.state.choice2}
             {/* ' Move forward into the forest.' */}
           
               </div>
               </div>
  )
    }
}
export default connect(null, {goblinAttack})(StoryBoard)