import React, { Component } from 'react'
import Registration from './Registration'
import {connect} from 'react-redux'
import {addUser} from '../actions/usersActions'
 class UsersContainer extends Component {

    componentDidMount(){
        this.props.addUser()
        }
render() {
        return (
            <div>
                
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { user: state.users}
}
export default connect(mapStateToProps, {addUser})(UsersContainer)






