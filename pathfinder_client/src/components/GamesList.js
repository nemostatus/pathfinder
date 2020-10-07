import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ls from 'local-storage'
import {deleteGame} from '../actions/gamesActions'



const GamesList = ({ games }) => {


   
 return (
   
        <div >
    
         <h1> Click to load file </h1>
            {games.map( game => 
         
            
            
         <div className= "list" key = {game.id} onClick={() => ls.set('game', game)}  >
             <Link to= {'/storyboard' } key={game.id}>level- {game.level} </Link>
            <br/>
           
          {game.hearts}<i className="fas fa-heart" style={{color:"red"}}></i> 
            <br/>
             items-{game.items} 
             <button onClick={deleteGame(game)} >Delete File</button> 
      
             </div>
            
           
            )}
  </div>
 
           
 
    )
}

const mapStateToProps = state => {
    return { games: state.games  }
}

export default connect(mapStateToProps, {deleteGame})(GamesList)
