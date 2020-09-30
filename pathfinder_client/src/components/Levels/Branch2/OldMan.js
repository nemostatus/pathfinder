import React, { Component } from 'react'



 class OldMan extends Component {
   
    render(){
        return (
            <div>

            <div className="situation-container">
                <div className ="situation">
                 
              <strong> 
                  You ride swiftly into the forest passed the damsel and feel bad you couldn't help but you realize the 
                  princess is in danger. As you travel faster trying to leave the past in the past you see a figure far 
                  in the distance sitting on a log. As you move closer you see it's an unsettling looking old man. He has
                  bloodshot, almost purely red eyes and calls out to you, saying "help me" in a chilling voice as
                  if the voice was resonating from inside your own head. 
               </strong>
               </div>
                
              <a href="/level/5"><div className = "option1" >
               Help the old man.
               </div></a> 

               <a href='/level/6'><div className = "option2">
                  Ride passed the old man and head to the mountains.
               </div></a>
               </div>
            </div>
)
    }}
    

export default OldMan