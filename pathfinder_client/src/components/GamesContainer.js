import React, { Component } from 'react'
import {connect} from 'react-redux'
import NewGame from  './NewGame'
import {fetchGames} from '../actions/gamesActions'





 export class GamesContainer extends Component {

    componentDidMount(){
        this.props.fetchGames()
        }

    render() {
        return (
            <div>
               <NewGame/>
                Games Container
       
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


