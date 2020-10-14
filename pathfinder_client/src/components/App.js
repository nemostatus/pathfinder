import React from 'react'
import Router from './Router'

import Navbar from './Navbar'
import Login from './Login'
import Registration from './Registration'

import ls from 'local-storage'

import {connect} from 'react-redux'

       

 const App = (props) => {

    if (ls.get("user_id") === null || props.users === null){ 
    return (
        <div>
           <Login/>
         <Registration/>
       {console.log(props.users)}

        </div>
    )
}
else{
    return ( <div>
       
       
      <Navbar/>
        <Router/>
    </div>
    )
} }


const mapStateToProps = state => {
        return { users: state.users  }
    }


export default connect(mapStateToProps)(App)
