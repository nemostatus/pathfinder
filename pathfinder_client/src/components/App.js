import React from 'react'
import Router from './Router'
import GamesContainer from './GamesContainer'
import Navbar from './Navbar'
import Login from './Login'
import Registration from './Registration'
import  UsersContainer from './UsersContainer'
import ls from 'local-storage'
import StoryBoard from './StoryBoard'



const App = () => {
const loggedIn = ls.get('user_id')

    if (loggedIn === null){
    return (
        <div>
           <Login/>
         <Registration/>
       

        </div>
    )
}
else{
    return ( <div>
        <UsersContainer/>
        <GamesContainer/>
        <StoryBoard/>
    <Router />
    </div>
    )
} }


export default App;
