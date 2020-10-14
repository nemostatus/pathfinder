import React from 'react'

export  const StoryPage = (props) => {
    return (
        <div>
                 <div className = "hearts" >
           {props.hearts} <i className="fas fa-heart" style={{color:"red"}}></i> 
               </div>

               <div className = "prompt" >
           {props.prompt}
           
               </div>
                        
           <div id = "option1" className = "option1" onClick={props.handleClick} >
           {props.choice1}
        
               </div>

             <div id= "option2" className = "option2" onClick={props.handleClick} >
             {props.choice2}
            
           
               </div>
        </div>
    )
}