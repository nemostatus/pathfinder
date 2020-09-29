import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Usersform from './Usersform'
import About from './About'
import GamesList from './GamesList'
const Router = () => {
    return(
        <Switch>
            <Route exact path="/" component={Usersform}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/games" component={GamesList}/>
            </Switch>
    )
}

export default Router