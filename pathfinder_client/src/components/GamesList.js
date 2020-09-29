import React from 'react'
import {connect} from 'react-redux'

const GamesList = ({ games }) => {
    return (
        <div>
            {games.map( game => 
            <div key ={game.id}>
            level- {game.level}
           
             hearts- {game.hearts} 
            
             items-{game.items} </div> 
            )}
  </div>
    )
}

const mapStateToProps = state => {
    return { games: state.games }
}

export default connect(mapStateToProps)(GamesList)
