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

    // The request will always timeout, but the playlist is always created, so close the window after 90s
    console.log("setTimeout started");
    setTimeout(
      function() {
        console.log("bye");
        this.setState({
          displayLoadingAnimation: false
        });

        // return to homepage
        props.history.push("https://moodyface.heroku.com");

      }.bind(this), 80000);

    if (window.performance) {
      if (performance.navigation.type === 1 || performance.navigation.type === 2) {
        // the page is reloaded or accessed via back/forward
        this.setState({
          displayError: true
        });
      } else {
        // the page is not reloaded
        let query = `https://infinite-dusk-31166.herokuapp.com/Spotify/createPlaylist`;
      
        try{
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

                // return to homepage
                props.history.push("https://moodyface.heroku.com");
            }
          }
          );
        } catch(e) {}
      }
    }
  }

  componentDidMount(){
    this.createPlaylist();
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
