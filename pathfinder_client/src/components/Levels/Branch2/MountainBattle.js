import React, { Component } from 'react'

class MountainBattle extends Component {
   
    render(){
        return (
            <div>

            <div className="situation-container">
                <div className ="situation">
                 
              <strong> 
               As you finish climbing to the top of the mountain you begin looking around in every direction to see any signs
               of the princess.  You hear a wicked cackle behind you. Startled, you swing arounas you turn. "I knew you'd eventually figure it out. In my 1000 years of living I always did enjoy royalty stew the best!
               I am quite surprised you didn't fall for my nasty trap down by the cave. You are a wise one." "Where is she!?"
               You yell. "Help!" You hear from below. The mouse by your feet with a small tiara is yelling out. "What have you done!?"
               Cackling "This princess was by far the brattiest in all my years of living, I couldn't deal with it anymore so I cursed
               her to wander these mountains small and afraid." "That's enough!"
               </strong>
               </div>
                
              <a href="/level/11"><div className = "option1" >
                Pick up the princess and run. rundeath run in place forever
               </div></a> 

               <a href='/level/12'><div className = "option2">
                 Swing your sword swiftly. sword death portal opens up stab yourself
               </div></a>

               <a href='/level/13'><div className = "option2">
             Challenge the witch to a game of wits. distractionwin cure witch by visintg wizard
               </div></a>
               <a href='/level/14'><div className = "option2">
                 Throw a rock at the witch.
               </div></a>
               </div>
            </div>
)
    }}
    

export default MountainBattle