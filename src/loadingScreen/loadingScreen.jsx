import React from "react";

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
        <div>LOADING</div>
      </>
    );
  }
}
