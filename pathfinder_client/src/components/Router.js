import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Usersform from './Usersform'
import About from './About'
import GamesList from './GamesList'
import LevelOne from './Levels/LevelOne'
import LevelTwo from './Levels/LevelTwo'
import GameOverSpider from './Levels/GameOverSpider'
const Router = () => {
    return(
        <Switch>
            <Route exact path="/" component={Usersform}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/games" component={GamesList}/>
            <Route exact path="/level/1" component={LevelOne}/>
            <Route exact path="/level/2" component={LevelTwo}/>
            <Route exact path="/gameOverSpider" component={GameOverSpider}/>
            </Switch>
    )
}

export default Router