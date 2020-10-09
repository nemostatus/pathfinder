import React from 'react'
import Router from './Router'
import GamesContainer from './GamesContainer'
import Navbar from './Navbar'



const App = () => {
 
   
    return (
        <div>
            <Navbar/>
          <GamesContainer/>
           <Router />
        </div>
    )
}


export default App;
