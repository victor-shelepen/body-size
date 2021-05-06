import React from "react"
import {
  Switch,
  Route,
} from 'react-router-dom'
import Progress from './page/progress'
import About from './page/about'

export default
  <Switch>
    <Route path='/about'>
      <About />
    </Route>
    <Route path='/'>
      <Progress />
    </Route>
  </Switch>
