import React from 'react'
import {Link} from 'react-router-dom'
import ls from 'local-storage'
export default function Navbar() {

    const handleLogout = () => {
        ls.clear()
        
 }

    return (
        <div>
            
             <Link to ={ '/about' }  style={{ marginRight: 10 }} >About </Link>
            
             <Link to ={ '/games' }  style={{ marginRight: 10 }}> Your Games</Link>
             <Link to ={ '/login' } style={{ marginRight: 10 }} onClick = {handleLogout}> Logout </Link>

              
            
        </div>
    )
}
