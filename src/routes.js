import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Form from './component/Form/Form'
import App from './App'
import Dashboard from './component/Dashboard/Dashboard'

export default(
    <Switch>
        <Route path='/add' component={Form}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/' component={App}/>
    </Switch>
)