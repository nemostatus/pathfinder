import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'



const GamesList = ({ games }) => {

   
 return (
   
        <div >
    
         <h1> Click to load file </h1>
            {games.map( game => 
         
            
            
               <div key ={game.id} className= "list" >
            level- {game.level}
            <br/>
           
          {game.hearts}<Link to= {`/level/${game.level}`}>  <i className="fas fa-heart" style={{color:"red"}}></i> </Link>
           
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
