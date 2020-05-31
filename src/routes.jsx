import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import all routes
import Loading from "./loadingScreen/loadingScreen.jsx";
//<Route path="/loading/?AT=:AT&RT=:RT" exact component={Loading} />
export default function Routes(){
    return(
        <Switch>    
            <Route path="/loading" exact component={Loading} />
        </Switch>
    );
}