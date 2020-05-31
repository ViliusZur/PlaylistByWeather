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

  createPlaylist = async (accessToken, refreshToken) => {
    // send a fetch request to back end to create a new playlist

    // The request will always timeout, but the playlist is always created, so close the window after 90s
    console.log("setTimeout started");
    setTimeout(
      function() {
        console.log("bye");
        this.setState({
          displayLoadingAnimation: false
        });

        // return to homepage
        window.location.href = "https://moodyface.herokuapp.com";
      }.bind(this), 80000);

    if (window.performance) {
      if (performance.navigation.type === 1 || performance.navigation.type === 2) {
        // the page is reloaded or accessed via back/forward
        this.setState({
          displayError: true
        });
      } else {
        // the page is not reloaded

        console.log("Access token: ", accessToken);
        console.log("Refresh token: ", refreshToken);

        let url = `https://infinite-dusk-31166.herokuapp.com/Spotify/createPlaylist?accessToken=${accessToken}&refreshToken=${refreshToken}`;
      
        try{
          fetch(url, {
          method: "GET",
          headers: 
          {
              "Accept": "application/json",
              "Content-Type": "application/json"
          }
          }).then(async res => {
            if(res.ok) {
                // do something here if the response is ok
                console.log("response is ok");

                this.setState({
                  displayLoadingAnimation: false
                });

                await setTimeout(
                  function() {
                    // return to homepage
                    window.location.href = "https://moodyface.herokuapp.com";
                  }.bind(this), 8000);
            }
          }
          );
        } catch(e) {}
      }
    }
  }

  componentDidMount(){
    const hash = window.location.hash
    .substring(1)
    .split('&')
    .reduce(function (initial, item) {
      if (item) {
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});
    window.location.hash = "";
    console.log(hash);

    this.createPlaylist(hash["AT"], hash["RT"]);
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
