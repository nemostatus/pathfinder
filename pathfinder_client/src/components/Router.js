import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Usersform from './Usersform'
import About from './About'
import GamesList from './GamesList'
import Castle from './Levels/Castle'
import Damsel from './Levels/Branch1/Damsel'
import GameOverSpider from './Levels/Branch1/GameOverSpider'
import OldMan from './Levels/Branch2/OldMan'
import Wizard from './Levels/Branch2/Wizard'
import Drink from './Levels/Branch2/Drink'
import GameOverWitch from './Levels/Branch2/GameOverWitch'
import Save from './Levels/Branch2/Save'
import Mist from './Levels/Branch2/Mist'
import MountainBattle from './Levels/Branch2/MountainBattle'
import DashBoard from './components/DashBoard'

const Router = () => {
    return(
        <Switch>
            <Route exact path="/" component={Usersform}/>
            <Route exact path="/dashboard" component={DashBoard}/>
            <Route exact path="/games" component={GamesList}/>
            <Route exact path="/level/1" component={Castle}/>
            <Route exact path="/level/2" component={Damsel}/>
            <Route exact path="/level/3" component={GameOverSpider}/>
            <Route exact path="/level/4" component={OldMan}/>
            <Route exact path="/level/5" component={Wizard}/>
            <Route exact path="/level/6" component={Drink}/>
            <Route exact path="/level/7" component={GameOverWitch}/>
            <Route exact path="/level/8" component={Save}/>
            <Route exact path="/level/9" component={Mist}/>
            <Route exact path="/level/10" component={MountainBattle}/>
           
            </Switch>
    )
}

export default Router