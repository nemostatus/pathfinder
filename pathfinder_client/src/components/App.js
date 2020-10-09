import React from 'react'
import Router from './Router'
import GamesContainer from './GamesContainer'
import Navbar from './Navbar'
import Login from './Login'



const App = (props) => {
 if (props.isLoggedIn === false){
     return (
        <div>
        <Login/>
      </div>
     )
 }
   else {
    return (
        <div>
          
          <GamesContainer/>
         
           <Router />
        </div>
    )
} }


export default App;
