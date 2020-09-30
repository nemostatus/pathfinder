import React, { Component } from 'react'

class Wizard extends Component {
   
    render(){
        return (
            <div>

            <div className="situation-container">
                <div className ="situation">
                 
              <strong> 
                  As soon as you stop to help the old man he looks meaner and more evil but you go with your gut 
                  and offer him some food from your pouch. As he consumes the food, he starts giggling like a madman!
                  He looks at you and says " You've done it! You've broken the curse that wretched witch put on me.
                  You see I crossed her path on this very road and she cursed me to sit on this log until someone 
                  was kind enough to help. I thought I would never be set free! Here take this for helping me 
                  brave knight! " You reach out to grab the potion from the old man. 
                  </strong>
               </div>
                
              <a href="/level/6">
                  <div className = "option1" >
            Drink Potion!
               </div></a> 

               <a href='/level/'>
                   <div className = "option2">
            Save Potion.
               </div></a>
               </div>
            </div>
)
    }}
    

export default Wizard