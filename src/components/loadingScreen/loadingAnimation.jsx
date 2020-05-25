import React from "react";
import "./loadingAnimation.css";
import ReactLoading from 'react-loading';

export default function LoadingAnimation(props) {
    let { display, displayError } = props;

    if(displayError){
        return(
            <div class="text-close">
                If playlist generator was activated - wait for your playlist in Spotify. You can close this window, Susan.
            </div>
        );
    }

    if(display){
        return (
            <>
                <div class="loading">
                
                    <ReactLoading type={"spinningBubbles"} color={"#1DB954"} height={"100%"} width={"100%"} delay={50}/>
                
                </div>
                <div class="text-div">
                    <div class="text-main">
                        Creating playlist
                    </div>
                    <div class="text-note">
                        This might take a minute, check Spotify when this is finished
                        <br></br>
                        Note: this site will do nothing accessed in external ways
                    </div>
                </div>
            </>
        );
    } else{
        return (
            <>
                <div class="text-close">
                    Playlist created. Check your Spotify.
                </div>
            </>
        );
    }
        
}
