import React from 'react'
import {Switch,Route} from 'react-router-dom'


import GamesList from './GamesList'

import Home from './Home'
import NewGame from './NewGame'
import Registration from './Registration'
import StoryBoard from './StoryBoard'
import Login from './Login'
import About from './About'

import Userslist from './Userslist'

const Router = () => {
    return(
        <Switch>
            
             <Route exact path="/registration" component={Registration}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/storyboard" component={StoryBoard}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/games" component={GamesList}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/heroes" component= {Userslist}/>
            <Route exact path="/newgame" component= {NewGame}/>
           
            </Switch>
    )
}

export default Router