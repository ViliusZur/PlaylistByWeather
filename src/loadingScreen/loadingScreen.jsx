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

                this.setState({
                  displayLoadingAnimation: false
                });

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
