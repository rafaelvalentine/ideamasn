import React from 'react'
// import Dashboard from '../pages/dashboard'
import { Switch, Route } from 'react-router-dom'

/**
 * pages
 */

 
import Home from '../containers/home'
import Dashboard from '../containers/dashboard'
// import Login from '../containers/login'
// import Register from '../containers/register'

 import NotFound from '../utils/Error/404error'

export default props => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/dashboard' component={Dashboard} />
    <Route component={NotFound} />
  </Switch>
)
