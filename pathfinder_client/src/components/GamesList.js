import React from 'react'
import {connect} from 'react-redux'

const GamesList = ({ games }) => {

    
 return (
       
        <div >
         
            {games.map( game => 
         
        
            <div key ={game.id} className= "list">
            level- {game.level}
            <br/>
           
            {game.hearts} <i className="fas fa-heart" style={{color:"red"}}></i>
           
            <br/>
             items-{game.items} 
            
             </div>
           
            
            )}
  </div>
 
    )
}

const mapStateToProps = state => {
    return { games: state.games }
}

export default connect(mapStateToProps)(GamesList)
