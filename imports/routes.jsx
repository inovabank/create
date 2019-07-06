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
import VideoPage from './ui/create/videos/VideoPage';
import HomeVideos from './ui/create/videos/HomeVideos';
import PageNotFound from './PageNotFound';

const browserHistory = createHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <PublicRoute exact path="/" component={Login}/>
            <PublicRoute exact path="/signup" component={SignUp}/>
            <PrivateRoute exact path="/information" component={Information}/>
            <Route exact path="/video" component={Create}/>
            <Route exact path="/video/:videoId" component={VideoPage}/>
            <Route component={PageNotFound}/>
        </Switch>
    </Router>
);
