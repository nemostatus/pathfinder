import React, { Component } from 'react'
import Registration from './Registration'
import {connect} from 'react-redux'
import {addUser} from '../actions/usersActions'
import {fetchUsers} from '../actions/usersActions'
import Login from './Login'

export class UsersContainer extends Component {

    componentDidMount(){
        this.props.fetchUsers()
        }
render() {
        return (
            <div>
        
            </div>
        )
    }
}
// const mapStateToProps = state => {
//     return { user: state.users}
// }
export default connect(null,  {fetchUsers})(UsersContainer)






