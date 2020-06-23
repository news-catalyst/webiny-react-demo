import React from 'react';
//This will be de-structured from the index.js file in this directory
import { App } from './';
import { Switch, Route } from 'react-router';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={App} />
        </Switch>
    );
};

export default Main;