import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Usersform from './Usersform'
import About from './About'
import GamesList from './GamesList'
import LevelOne from './Levels/LevelOne'
const Router = () => {
    return(
        <Switch>
            <Route exact path="/" component={Usersform}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/games" component={GamesList}/>
            <Route exact path="/level/1" component={LevelOne}/>
            </Switch>
    )
}

export default Router