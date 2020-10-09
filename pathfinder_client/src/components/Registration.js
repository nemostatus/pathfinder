import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addUser } from '../actions/usersActions'
import { withRouter} from 'react-router'

import {Link} from 'react-router-dom'

class Registration extends Component {

    state = {
        username: '',
        password: '',
        password_confirmation: ''
    }


    handleChange = e => {
   const {name, value} = e.target
   this.setState({
       [name]: value
    })
    }

    handleSubmit = e => {
        e.preventDefault()
      
        this.props.addUser(this.state)
        this.props.history.push('/games')
        this.props.isLoggedIn = true
    }
    render() {

        return (
            <div>
                <h1> Sign Up </h1>
                <form onSubmit = {this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" value ={this.state.username} onChange={this.handleChange} name="username"></input>
                    <br/>
                    <label>Password:</label>
                    <input type="text" value ={this.state.password} onChange={this.handleChange} name="password"></input>
                    <br/>
                    <label>Password Confirmation:</label>
                    <input type="text" value ={this.state.password_confirmation} onChange={this.handleChange} name="password_confirmation"></input>
                    <br/>
            
                    <input type="submit" value="create user"></input>
                </form>
                Have an account? <Link to = '/login'>Login</Link>
                
            </div>
        )
    }
}

export default withRouter(connect(null, {addUser})(Registration))


