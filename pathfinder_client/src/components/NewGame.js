import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addGame } from '../actions/gamesActions'
import ls from 'local-storage'

 class NewGame extends Component {
    
             
    
    state = {
     
        level: "1", //the current level changed with onclick events
        hearts: 5,

        user_id: ls.get('user_id'),
        choice1: 'Order the pilot to manuever through the belt',
        choice2: 'Oreder the pilot to use the hyper-beam',
        prompt: 'The year is 3030.You are the cpt. of a space mission. Your mission is to head from the mars base to Pluto\
        With everything going to plan you hear the pilot yell out that the ships is heading toward an asteroid belt.You..'

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
