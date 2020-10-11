import React from 'react'
import Router from './Router'
import GamesContainer from './GamesContainer'
import Navbar from './Navbar'
import Login from './Login'
import Registration from './Registration'
import  UsersContainer from './UsersContainer'
import ls from 'local-storage'
import StoryBoard from './StoryBoard'
import {connect} from 'react-redux'

       

 const App = () => {


//map redux state to prop you have findeuser make adispatch updating the 
//so far i have a users reducer and a games reducer
//should i send payload to users reducer, then what?
//map over state and set a ternary, if users state has a user render the second half if not then render login 
//clear state on logout call and reroute to '/'
    if (ls.get("user_id") === null){ //its not working try props
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
      <Navbar/>
        <Router/>
    </div>
    )
} }


// const mapStateToProps = state => {
//         return { users: state.users  }
//     }


export default App
