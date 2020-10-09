import React from 'react'
import Router from './Router'
import GamesContainer from './GamesContainer'
import Navbar from './Navbar'
import Login from './Login'
import Registration from './Registration'
import { UsersContainer } from './UsersContainer'



const App = (props) => {
 if (props.isLoggedIn === false){
     return (
        <div>
        <Login/>
  <Router />
      </div>
     )
 }
   else {
    return (
        <div>
          
          <GamesContainer/>
         <UsersContainer/>
           <Router />
        </div>
    )
} }


export default App;
