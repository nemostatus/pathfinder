import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addGame } from '../actions/gamesActions'
import ls from 'local-storage'

 class NewGame extends Component {
    
             
    
    state = {
     
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

    handleClick =  () => {
     
        this.props.addGame(this.state)

    }
    render() {
        return (
            <div>
                <button onClick= {this.handleClick} >New Game </button>
            </div>
        )
    }
}
export default connect(null, {addGame})(NewGame)
