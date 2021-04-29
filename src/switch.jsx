import React from "react"
import {
  Switch,
  Route,
} from 'react-router-dom'
import Home from './page/home'
import About from './page/about'

export default
  <Switch>
    <Route path='/about'>
      <About />
    </Route>
    <Route path='/'>
      <Home />
    </Route>
  </Switch>
