import React, { Component } from 'react'
import {connect} from 'react-redux'
import Navbar from './Navbar'

import {fetchGames} from '../actions/gamesActions'






 export class GamesContainer extends Component {

    componentDidMount(){
        this.props.fetchGames()
        }

    render() {
        return (
            <div>
               
          </div>)
                }
            }
             
             
            
       




export default connect(null, { fetchGames})(GamesContainer);


