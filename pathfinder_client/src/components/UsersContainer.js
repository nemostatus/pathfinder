import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions/usersActions'
import UsersList from './Userslist'
export class UsersContainer extends Component {

    componentDidMount(){
       this.props.fetchUsers()
       
        }
render() {
        return (
            <div>
        <UsersList/>
            </div>
        )
    }
}
// const mapStateToProps = state => {
//     return { user: state.users}
// }
export default connect(null,  {fetchUsers})(UsersContainer)






