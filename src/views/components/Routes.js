import React, {Component} from 'react';
import { Route, Switch, BrowserRouter, Link, Redirect, withRouter} from 'react-router-dom';
import App from './../../App';
import Login from './../Login/Login';
import Register from './../Register/Register';
import HomePage from './../HomePage/HomePage';
import Ver from '../HomePage/components/Ver';
import Modificar from './../HomePage/components/Modificar';
import Eliminar from './../HomePage/components/Eliminar';
import Logout from "./../HomePage/components/Logout"
import ModificarLocations from "./../HomePage/components/ModificarViews/ModificarLocations";
import ModificarFamilies from "./../HomePage/components/ModificarViews/ModificarFamilies";
import ModificarView from "./../HomePage/components/ModificarViews/ModificarView";
import { decode } from 'punycode';


const isAuthenticated = () => {
    let token = localStorage.getItem("access_token")
    try {
        decode(token)
    } catch (error) {
        return false;
    }
    return true;
}
const PrivatedRoute = ({component: Component, ...rest}) =>(

    <Route 
        {...rest}
        render={props =>
            isAuthenticated() ? (<Component {...props}/>):(<Redirect to={{pathname: "/"}}/>)

        } 
        />
     );

const AppRoutes = () =>(
    <App>
     <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <PrivatedRoute exta path="/modificarlocations" component={ModificarLocations}/>
        <PrivatedRoute exta path="/modificarfamilies" component={ModificarFamilies}/>
        <PrivatedRoute exta path="/modificarview" component={ModificarView}/>
        <PrivatedRoute exact path="/homepage" component={HomePage}/>
        <PrivatedRoute exact path="/ver" component={Ver}/>
        <PrivatedRoute exact path="/modificar" component={Modificar}/>
        <PrivatedRoute exact path="/eliminar" component={Eliminar}/>
        <PrivatedRoute exact path="/logout" component={Logout}/>
    </Switch>
    </App>
)

export default AppRoutes;
