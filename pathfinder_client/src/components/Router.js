import React from "react";
import { Switch, Route } from "react-router-dom";

import NewGame from "./NewGame";
import Registration from "./Registration";
import StoryBoard from "./StoryBoard";
import Login from "./Login";
import { About } from "./About";
import {Navbar} from "./Navbar";
import UsersContainer from "./UsersContainer";
import GamesContainer from "./GamesContainer";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/registration" component={Registration} />

      <Route exact path="/storyboard" component={StoryBoard} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/games" component={GamesContainer} />
      <Route exact path="/about" component={About} />
      <Route exact path="/astronauts" component={UsersContainer} />
      <Route exact path="/newgame" component={NewGame} />
      <Route exact path="/navbar" component={Navbar} />
    </Switch>
  );
};

export default Router;
