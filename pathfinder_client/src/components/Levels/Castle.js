import React, { Component } from 'react'

class Castle extends Component {
   
 render(){
        return (
            <div>

            {/* <div className="situation-container">
                <div className ="situation">
                 
              <strong> You are this.username(mapstatetoprops giving this users username ) the bravest knight in the kingdom. 
                As you are resting in your quarters, you're door is kicked in and as you go to reach for your sword, you 
                recognize these intruders as royal guards. "You must come with us (this.username), the king has demanded 
                your assistance at once." You ride out on your horse to the castle. As soon as you enter the king shouts
                furiously, "(this.username)! Princess Redux is missing! Some of my guards believe she was taken sometime 
               last night! You must save her. Or it will be your head!" As you ride out towards the forest you see a damsel
               in distress being attacked by some goblins!
               </strong>
               </div>
                 */}
              <a href="/level/2"><div className = "option1" >
           Save the damsel!
               </div></a> 

               <a href='/level/4'><div className = "option2">
                  Move forward into the forest.
               </div></a>
               </div>
           
)
    }}
    

export default Castle