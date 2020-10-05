import React, { Component } from 'react'
import ls from 'local-storage'
import {connect} from 'react-redux'
import {goblinAttack} from '../actions/gamesActions'



 class StoryBoard extends Component {
        
       state = {
        id: ls.get('game_id'), //getting the level by its id to be used for rails requests
        level: "1", //the current level changed with onclick events
        hearts: 5,

        user_id: ls.get('user_id'),
        choice1: 'Save the damsel!',
        choice2: ' Move forward into the forest.',
        prompt: 'You are this.username(mapstatetoprops giving this users username ) the bravest knight in the kingdom. \
        As you are resting in your quarters, youre door is kicked in and as you go to reach for your sword you  \
        recognize these intruders as royal guards. "You must come with us (this.username), the king has demanded \
        your assistance at once." You ride out on your horse to the castle. As soon as you enter the king shouts \
        furiously, "(this.username)! Princess Redux is missing! Some of my guards believe she was taken sometime \
       last night! You must save her. Or it will be your head!" As you ride out towards the forest you see a damsel \
       in distress being attacked by some goblins!'
        }
        handleClick = ( event) => {
     // take in the current level so when invoked it will be 
     //have a case statement that will setState, invoke an action based on this.state.level and event.value
    
     const level = this.state.level
     if(event.target.id === "option1" && level === "1" ) {
     //lose 2 hearts, change level to 2, change prompt and choice1,2
     this.props.goblinAttack(this.state)
     this.setState({
         prompt: 'After you put up a brave and furious struggle against the goblins you grow more and more weary and \
         your vision grows blurry from exhaustion. As you defeat the last goblin you check on the damsel. \
         "You foolish knight!" She shrieks. The damsel turns to reveal herself as a goblin and knocks you out with a club.\
         You wake up to find your sword and horse have been taken and the goblins are gone! You continue toward \
         the forest to see 2 paths. One looks like the main entrance and another is a strange looking shortcut.',
        choice1:  'Take the shortcut.',
        choice2: 'Enter through the main entrance.',
        level:"2",
        hearts: 3
    })
}
     else if(   event.target.id === "option2" && level === "1" ){
        this.setState({
            prompt:   'You charge swiftly into the forest  As you travel faster trying to leave the past in the past you see a figure far\
            in the distance sitting on a log. As you move closer you see its an unsettling looking old man. He has \
            bloodshot almost purely red eyes and calls out to you, saying "help me" in a chilling voice as\
            if the voice was resonating from inside your own head.',
           choice1:  'Help the old man.',
           choice2: '  Move passed the old man and head to the mountains.'
       
   
        })
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