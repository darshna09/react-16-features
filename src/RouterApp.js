import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import NewFeatures from './App';
import Hooks from './hooks';
import IndecisionApp from './hooks/indecisionApp/components/IndecisionApp';
import User from './hooks/users';

const randomFunction = (value) => console.log('hllp: ', value);

const routes = (
    <BrowserRouter>
        <Route path="/" component={NewFeatures} exact={true} />
        <Route path="/hooks" render={props => <Hooks randomFunction={randomFunction}/>} />
        <Route path="/indecisionApp" component={IndecisionApp} />
        <Route path="/hooksReactConf" component={User} />
    </BrowserRouter>
);

const rootApp = document.getElementById('app');
ReactDOM.render(routes, rootApp);