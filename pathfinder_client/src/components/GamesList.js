import React from 'react'
import {connect} from 'react-redux'
import { useHistory } from "react-router"


  
  
const GamesList = ({ games }) => {
    let history = useHistory()

    function handleClick() {
      history.push("/testing")
    }
    
 return (
       
        <div >
            {games.map( game => 
         
        
            <div key ={game.id} className= "list" onClick={handleClick} >
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
