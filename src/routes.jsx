import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import all routes
import Playlist_page from './playlist_page/playlist_page';

export default function Routes(){
    return(
        <Switch>
            <Route path='/playlist' exact component={Playlist_page} />          
        </Switch>
    );
}