import React from "react";
import "./homepage.css";

import Slider from "../components/slider/slider.jsx";
import Routes from "../routes.jsx";

export default class Homepage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        showSuccess: false,         //if we should be showing success message after adding user
        showError: false,           //if we should be showing error message
        errorCode: 400,
        responseStatus: "nothing",  //the validation status of the email 
        errorMessage: ""            //the error message to display to the user after server rejects action
    };
  };

  sendDataToBackend = async (valence) => {
    // sends data to the back end
    
    valence = parseFloat(valence);
    valence = valence / 100;

    var data = {
      "valence": valence
    }
    console.log(data);
   
    let query = `https://infinite-dusk-31166.herokuapp.com/main/`;
    
    fetch(query, {
      method: "POST",
      headers: 
      {
          "Accept": "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
      }).then(res => {
        if(res.ok) {
            // do something here if the response is ok
            console.log("response is ok");
            res.json().then(json => {
              console.log(json);
            });
        } else {
          console.log(query);
          console.log("error in fetching link");
        }
      }
    );
  }

  render() {

    return (
      <>
        <Slider
          parentCallback={this.sendDataToBackend}
        />
        <Routes />
      </>
    );
  }
}
