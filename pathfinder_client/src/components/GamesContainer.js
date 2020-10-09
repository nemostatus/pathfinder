import React, { Component } from 'react'
import {connect} from 'react-redux'

import {fetchGames} from '../actions/gamesActions'






 export class GamesContainer extends Component {

    componentDidMount(){
        this.props.fetchGames()
        }

    render() {
        return (
            <div>
             
            
       
            {this.props.user.map( user => 
         
        
            <div key ={user.id} className= "list">
            user - {user.username}
            
            
            </div>
           
            
           )}
 </div>)}}
const mapStateToProps = state => {
    return { user: state.users}
}



export default connect(mapStateToProps, { fetchGames})(GamesContainer);


