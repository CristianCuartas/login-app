import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
import App from './../../App';
import Login from './../Login/Login';
import Register from './../Register/Register';
import HomePage from './../HomePage/HomePage';
const AppRoutes = () =>(
    <App>
     <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact parh="/homepage" component={HomePage}/>
    </Switch>
    </App>
)

export default AppRoutes;
