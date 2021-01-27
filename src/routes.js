import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Search from './components/Search'
import Show from './components/Show'
import Count from './components/Count'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Search}/>
                <Route path="/show/:id" component={Show} />
                <Route path="/count/:id" component={Count}/>
            </Switch>
        </BrowserRouter>
    )
}