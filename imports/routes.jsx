import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory as createHistory } from 'history';
// route components
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Login from "./ui/Login";
import SignUp from './ui/SignUp';
import Calculator from './ui/Calculator';

const browserHistory = createHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <PublicRoute exact path="/" component={Login}/>
            <PublicRoute exact path="/signup" component={SignUp}/>
            <PublicRoute exact path="/calculator" component={Calculator}/>
            <Route component={Login}/>
        </Switch>
    </Router>
);
