import React, { Component } from 'react'
import {connect} from 'react-redux'


import {fetchGames} from '../actions/gamesActions'
import GamesList from './GamesList'

export class GamesContainer extends Component {

    componentDidMount(){
        this.props.fetchGames()
        }

    render() {
        return (
            <div>
               <GamesList/>
          </div>)
                }
            }
             
             
            
       




export default connect(null, { fetchGames})(GamesContainer);


