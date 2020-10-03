import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addGame } from '../actions/gamesActions'
import ls from 'local-storage'

 class NewGame extends Component {
    
             
    
    state = {
        level:1,
        hearts:5,
        items: 'horse',
        user_id: ls.get('user_id')
        }

    handleClick =  e => {
      e.preventDefault()
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
