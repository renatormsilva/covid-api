import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Search from './components/Search'
import Show from './components/Show'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Search}/>
                <Route path="/show" component={Show} />
            </Switch>
        </BrowserRouter>
    )
}