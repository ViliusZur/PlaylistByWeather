import React from "react";
import ReactLoading from 'react-loading';
import "./loadingScreen.css";

export default class LoadingScreen extends React.Component {

  createPlaylist = async () => {
    // send a fetch request to back end to create a new playlist

    let query = `http://localhost:3300/Spotify/createPlaylist`;
    
    fetch(query, {
      method: "GET",
      headers: 
      {
          "Accept": "application/json",
          "Content-Type": "application/json"
      }
      }).then(res => {
        if(res.ok) {
            // do something here if the response is ok
            console.log("response is ok");
            // close the tab
            window.opener = null;
            window.open("", "_self");
            window.close();
        } else {
          console.log(query);
          console.log("error in fetching link");
        }
      }
    );
  }

  render() {
    this.createPlaylist();
    return(
      <>
        <div class="loading">
          
            <ReactLoading type={"spinningBubbles"} color={"#1DB954"} height={"100%"} width={"100%"} delay={50}/>
          
        </div>
        <div class="text-div">
          <div class="text-main">
            Creating playlist
          </div>
          <div class="text-note">
            this might take a minute, check Spotify when this is finished
          </div>
        </div>
          
      </>
    );
  }
}
