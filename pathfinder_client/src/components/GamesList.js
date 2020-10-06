import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ls from 'local-storage'



const GamesList = ({ games }) => {


   
 return (
   
        <div >
    
         <h1> Click to load file </h1>
            {games.map( game => 
         
            
            
         <Link to= {'/storyboard'} key={game.id}> <div className= "list" onClick={() => ls.set('game', game)} >
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
