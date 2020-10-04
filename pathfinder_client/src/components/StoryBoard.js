import React, { Component } from 'react'
import ls from 'local-storage'

export default class StoryBoard extends Component {
    state = {
        level: 1,
        hearts: 5,
        items: 'horse',
        user_id: ls.get('user_id'),
        choice1: 'Save the damsel!',
        choice2: ' Move forward into the forest.',
        prompt: 'You are this.username(mapstatetoprops giving this users username ) the bravest knight in the kingdom. n\
        As you are resting in your quarters, youre door is kicked in and as you go to reach for your sword you  n\
        recognize these intruders as royal guards. "You must come with us (this.username), the king has demanded n\
        your assistance at once." You ride out on your horse to the castle. As soon as you enter the king shouts n\
        furiously, "(this.username)! Princess Redux is missing! Some of my guards believe she was taken sometime n\
       last night! You must save her. Or it will be your head!" As you ride out towards the forest you see a damsel n\
       in distress being attacked by some goblins!'
        }
    render() {
        return (
            
            <div>
                                
           <div className = "hearts" >
           {this.state.hearts}
               </div>

               <div className = "prompt" >
           {this.state.prompt}
               </div>
                        
           <div className = "option1" >
           {this.state.choice1}
               </div>

             <div className = "option2">
             {this.state.choice2}
               </div>
               </div>
                
     
        )
    }
}
