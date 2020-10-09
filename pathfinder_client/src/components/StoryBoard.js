import React, { Component } from 'react'
import ls from 'local-storage'
import {connect} from 'react-redux'
import {updateGame} from '../actions/gamesActions'
import * as choices from '../choices'
import Navbar from './Navbar'



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
     if(event.target.id === "option1" && level === "Asteroid Belt" ) {
     //lose 2 hearts, change level to 2, change prompt and choice1,2
   this.setState(choices.asteroidmanuever, () => { this.props.updateGame(this.state)}) // manuever
    }
     else if(event.target.id === "option2" && level === "Asteroid Belt" ){
    this.setState(choices.asteroidbeam, () => { this.props.updateGame(this.state)}) //beam

     }
      // end  of level 1 //////////////////////
     else if(event.target.id === "option1" && level === "Ship Wreck" ) {
       this.setState(choices.shipwreckthruster, () => { this.props.updateGame(this.state)})
  }
        else if(event.target.id === "option2" && level === "Ship Wreck" ){
          this.setState(choices.shipwreckdonothing, () => { this.props.updateGame(this.state)})
        }
        else if(event.target.id === "option1" && level === "Low Battery" ) {
            this.setState(choices.lowbatterypowersave, () => { this.props.updateGame(this.state)})
       }
             else if(event.target.id === "option2" && level === "Low Battery" ){
               this.setState(choices.lowbatteryreroute, () => { this.props.updateGame(this.state)})
             }
             else if(event.target.id === "option1" && level === "Final Decision" ) {
                this.setState(choices.finalsdecisionfire, () => { this.props.updateGame(this.state)})
           }
                 else if(event.target.id === "option2" && level === "Final Decision" ){
                   this.setState(choices.finalsdecisionsignal, () => { this.props.updateGame(this.state)})
                 }
             else if( level === "Black Hole" ) {
                this.setState(choices.blackhole)
           }
                 else if( level === "Game Over" ){
                   this.setState(choices.gameover, () => { this.props.updateGame(this.state)})
                 }
    }
    

       
    render() {
        return (
  
            <div>
                                
                                <Navbar/>
           <div className = "hearts" >
           {this.state.hearts} <i className="fas fa-heart" style={{color:"red"}}></i> 
               </div>

               <div className = "prompt" >
           {this.state.prompt}
           
               </div>
                        
           <div id = "option1" className = "option1" onClick={this.handleClick} >
           {this.state.choice1}
        
               </div>

             <div id= "option2" className = "option2" onClick={this.handleClick} >
             {this.state.choice2}
            
           
               </div>
               </div>
  )
    }
}
export default connect(null, {updateGame})(StoryBoard)