import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addGame } from '../actions/gamesActions'

 class NewGame extends Component {
      
    state = {
        hearts:5,
        items: 'horse',
        level: 'lvl'
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
