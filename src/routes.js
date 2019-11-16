import React from 'react'
import { isAuthenticated } from './auth'

import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Add from './pages/Add'
import Home from './pages/Home'

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: '/', state: {from: props.location}}}/>
        )
    )}/>
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/home" component={ Home }/>
            <PrivateRoute path="/add" component={ Add } />
        </Switch>
    </BrowserRouter>
)

export default Routes