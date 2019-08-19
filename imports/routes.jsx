import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory as createHistory } from 'history';

// route components
import PublicRoute from './ui/PublicRoute';
import Login from "./ui/User/Login";
import SignUp from './ui/User/SignUp';
import Create from './ui/Create/Create';
import Account from './ui/Create/Account/Account';
import VideoPage from './ui/Create/Videos/VideoPage';
import PageNotFound from './ui/PageNotFound';
import LandingPage from "./ui/LandingPage/LandingPage";

const browserHistory = createHistory();

export const renderRoutes = () => (
    <Router history={browserHistory} >
        <Switch>
            <PublicRoute exact path ="/" component={LandingPage}/>
            <PublicRoute exact path="/login" component={Login}/>
            <PublicRoute exact path="/signup" component={SignUp}/>
            <Route exact path="/video" component={Create}/>
            <Route exact path="/account" component={Account}/>
            <Route exact path="/video/:videoId" component={VideoPage}/>
            <Route component={PageNotFound}/>
        </Switch>
    </Router>
);
