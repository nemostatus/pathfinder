import React, { Component } from 'react'
import {connect} from 'react-redux'
import { findUser } from '../actions/usersActions'

 class Login extends Component {
    state = {
        username: '',
        password: ''
    }


    handleChange = e => {
   const {name, value} = e.target
   this.setState({
       [name]: value
    })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.findUser(this.state)
        this.props.history.push('/games')
    }
    render() {
        return (
            <div>
              <h1> Log in </h1>
                <form onSubmit = {this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" value ={this.state.username} onChange={this.handleChange} name="username"></input>
                    <br/>
                    <label>Password:</label>
                    <input type="text" value ={this.state.password} onChange={this.handleChange} name="password"></input>
                    
                    <input type="submit" value="create user"></input>
                </form>
                
            </div>
        )
    }
}

export default connect(null, {findUser})(Login)
