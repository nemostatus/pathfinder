import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ls from 'local-storage'



const GamesList = ({ games }) => {


   
 return (
   
        <div >
    
         <h1> Click to load file </h1>
            {games.map( game => 
         
            
            
         <Link to= {'/storyboard'}> <div key ={game.id} className= "list" onClick={() => ls.set('game_id', game.id)} >
            level- {game.level}
            <br/>
           
          {game.hearts}<i className="fas fa-heart" style={{color:"red"}}></i> 
            <br/>
             items-{game.items} 
      
             </div>
             </Link>
            
            )}
  </div>
 
           
 
    )
}

const mapStateToProps = state => {
    return { games: state.games  }
}

export default connect(mapStateToProps)(GamesList)
