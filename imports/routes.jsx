import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory as createHistory } from 'history';
// route components
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Login from "./ui/Login";
import SignUp from './ui/SignUp';
import Information from './ui/Information';
import Create from './ui/Create';
import A_video from './ui/create/videos/playlists/A_playlist/A_video/A_video';
import PageNotFound from './PageNotFound';

const browserHistory = createHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <PublicRoute exact path="/" component={Login}/>
            <PublicRoute exact path="/signup" component={SignUp}/>
            <PublicRoute exact path="/A_video" component={A_video}/>
            <PrivateRoute exact path="/information" component={Information}/>
            <PrivateRoute exact path="/create" component={Create}/>
            <Route component={PageNotFound}/>
        </Switch>
    </Router>
);
