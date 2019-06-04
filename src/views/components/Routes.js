import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
import App from './../../App';
import Login from './../Login/Login';
import Register from './../Register/Register';
import HomePage from './../HomePage/HomePage';
import Ver from '../HomePage/components/Ver';
import Modificar from './../HomePage/components/Modificar';
import Eliminar from './../HomePage/components/Eliminar'
const AppRoutes = () =>(
    <App>
     <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/homepage" component={HomePage}/>
        <Route exact path="/ver" component={Ver}/>
        <Route exact path="/modificar" component={Modificar}/>
        <Route exact path="/eliminar" component={Eliminar}/>
    </Switch>
    </App>
)

export default AppRoutes;
