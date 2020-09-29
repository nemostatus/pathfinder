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
                
                Games Container
            </div>
        )
    }
}



export default connect(null, { fetchGames })(GamesContainer);


