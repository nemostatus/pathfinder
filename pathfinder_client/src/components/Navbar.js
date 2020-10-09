import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            
             <Link to ={ '/about' }  style={{ marginRight: 10 }} >About </Link>
            
             <Link to ={ '/games' }  style={{ marginRight: 10 }}> Your Games</Link>
             <Link to ={ '/games' }  style={{ marginRight: 10 }}> Logout</Link>

              
            
        </div>
    )
}
