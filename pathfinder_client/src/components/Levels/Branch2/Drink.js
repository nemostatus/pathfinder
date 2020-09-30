import React, { Component } from 'react'

class Drink extends Component {
   
    render(){
        return (
            <div>

            <div className="situation-container">
                <div className ="situation">
                 
              <strong> 
                  As you consume the potion of an other worldly color, you feel ready to conquer the mountain and obstacles 
                  ahead of you. You bolt away as you look behind you and you see the old man dancing in joy. "Wow, that's some powerful
                  stuff!" As you exit the forest you look behind you to see a strange mist covering the forest.
                   With the potion wearing off, you start to feel weary. However in a distant cave you hear the princess
                  scream out!
               </strong>
               </div>
                
              <a href="/level/7"><div className = "option1" >
             Run into the cave.
               </div></a> 

               <a href='/level/10'><div className = "option2">
                 Climb to the top of mountain.
               </div></a>
               </div>
            </div>
)
    }}
    

export default Drink