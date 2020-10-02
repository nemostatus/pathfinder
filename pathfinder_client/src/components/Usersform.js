import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addUser } from '../actions/usersActions'

class Usersform extends Component {

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
    }
    render() {

        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" value ={this.state.username} onChange={this.handleChange} name="username"></input>
                    <br/>
            
                    <input type="text" value ={this.state.password} onChange={this.handleChange} name="password"></input>
                    <br/>
            
                    <input type="text" value ={this.state.password_confirmation} onChange={this.handleChange} name="password_confirmation"></input>
                    <br/>
            
                    <input type="submit" value="create user"></input>
                </form>

                
            </div>
        )
    }
}

export default connect(null, {addUser})(Usersform)


