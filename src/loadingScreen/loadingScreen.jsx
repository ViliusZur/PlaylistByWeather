import React from "react";

import LoadingAnimation from "../components/loadingScreen/loadingAnimation";

export default class LoadingScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        displayLoadingAnimation: true,
        displayError: false
    };
  };

  createPlaylist = async () => {
    // send a fetch request to back end to create a new playlist

    if (window.performance) {
      if (performance.navigation.type === 1 || performance.navigation.type === 2) {
        // the page is reloaded or accessed via back/forward
        this.setState({
          displayError: true
        });
      } else {
        // the page is not reloaded
        let query = `https://infinite-dusk-31166.herokuapp.com/Spotify/createPlaylist`;
      
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

                this.setState({
                  displayLoadingAnimation: false
                });

                // close the tab
                window.opener = null;
                window.open("", "_self");
                window.close();
            }
          }
        );
      }
    }
  }

  componentDidMount(){
    this.createPlaylist();
    // The request will always timeout, but the playlist is always created, so close the window after 90s
    console.log("timeout");

    setTimeout(
      function() {

        this.setState({
          displayLoadingAnimation: false
        });

        // close the tab
        window.opener = null;
        window.open("", "_self");
        window.close();

      }.bind(this), 90000);
  }

  render() {
    return(
      <>
        <LoadingAnimation 
          display={this.state.displayLoadingAnimation} 
          displayError={this.state.displayError}
          />
      </>
    );
  }
}
