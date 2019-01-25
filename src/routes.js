import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Form from './component/Form/Form'

export default(
    <Switch>
        <Route path='/add' component={Form}/>
    </Switch>
)