import React from "react";
import { Button } from "react-bootstrap";


export default function Valence(props) {
    const { displayLoginButton, displayLoginForm, sendToForm, sendSpotifyData } = props;
  
    if(displayLoginButton) {
        return (
            <div>
                <Button variant="primary" type="button" onClick={sendToForm}>
                    Log in with Spotify
                </Button>
            </div>
        );
    }
    else if(displayLoginForm) {
        return (
            <div>
                <Button variant="primary" type="button" onClick={sendSpotifyData}>
                    Submit login form
                </Button>
            </div>
        );
    }
    else {
        return(<></>);
    }
}
