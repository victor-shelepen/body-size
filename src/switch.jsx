import React from "react"
import {
  Switch,
  Route
} from 'react-router-dom'
import Progress from './page/progress'
import Measurements from './page/measurements'
import Grid from './page/grid'

export default
  <Switch>
    <Route path='/measurements'>
      <Measurements />
    </Route>
    <Route path="/grid" component={Grid} />
    <Route path='/'>
      <Progress />
    </Route>
  </Switch>
