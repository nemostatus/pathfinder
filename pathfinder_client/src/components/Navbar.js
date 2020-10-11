import React from 'react'
import {Link} from 'react-router-dom'
import ls from 'local-storage'
import {gameslogout} from '../actions/gamesActions'
import {userslogout} from '../actions/usersActions'
import {connect} from 'react-redux'

 function Navbar(props) {

    const handleLogout = () => {
        ls.clear()
    props.userslogout()
        props.gameslogout()

        
 }

    return (
        <div>
            
             <Link to ={ '/about' }  style={{ marginRight: 10 }} >About </Link>
            
             <Link to ={ '/games' }  style={{ marginRight: 10 }}> Your Games</Link>
             <Link to ={ '/' } style={{ marginRight: 10 }} onClick = {handleLogout}> Logout </Link>

              
            
        </div>
    )
}

export default connect(null,{userslogout, gameslogout})(Navbar)
