import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import all routes
import Close from "./components/close/close.jsx";

export default function Routes(){
    return(
        <Switch>       
            <Route path='/close' exact component={Close} />
        </Switch>
    );
}