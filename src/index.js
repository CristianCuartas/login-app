import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AppRoutes from './../src/views/components/Routes';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <Router>
    <AppRoutes />
    </Router>, 
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
