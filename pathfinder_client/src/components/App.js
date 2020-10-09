import React from 'react'
import Router from './Router'
import GamesContainer from './GamesContainer'
import Navbar from './Navbar'
import Login from './Login'



const App = () => {
 
   
    return (
        <div>
          
          <GamesContainer/>
          <Login/>
           <Router />
        </div>
    )
}


export default App;
