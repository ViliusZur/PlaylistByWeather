import React from "react";
import "./homepage.css";
import { Alert } from "react-bootstrap";

import Weather from "../components/weather/weather.jsx";
import FindCoordinates from "../components/findCoordinates/findCoordinates.jsx";
import Slider from "../components/slider/slider.jsx";
import LoadingScreen from "../components/loadingScreen/loadingScreen.jsx";

import Routes from '../routes.jsx';

export default class Homepage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        latitude: "",
        longitute: "",
        city: "",
        weather: "",
        displayLocationButton: true,
        displaySlider: false,
        displayLoadingScreen: false,
        displayWeather: false,
        showSuccess: false,         //if we should be showing success message after adding user
        showError: false,           //if we should be showing error message
        errorCode: 400,
        responseStatus: "nothing",  //the validation status of the email 
        errorMessage: ""            //the error message to display to the user after server rejects action
    };
  };

  searchWeather = async (position) => {
    // get weather from users location using latitude and longitude

    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    this.setState({
      latitude: lat,
      longitude: lon
    });
    // save in local storage for future use
    localStorage.setItem("latitude", lat);
    localStorage.setItem("longitude", lon);

    let query = `http://localhost:3300/weather/?lat=${lat}&lon=${lon}`;
    
    fetch(query, {
      method: "GET",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      }})
      .then(res => {
        if(res.ok) {
            // do something here if the response is ok
            console.log("OK: lat and lon sent.");
            //console.log(res.body);
            
            res.json().then(json => {
              //console.log(json);

              
              this.setState({
                weather: json.weather[0],
                city: json.name,
                displayLocationButton: false,
                displayWeather: true,
                displaySlider: true
              });


            });
        } else {
          console.log(query);
          console.log("ERROR: sending lat and lon.");
        }
      }
    );
  }

  findLocation = e => {
    // find location of user (latitude and longitude)
    e.preventDefault();
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.searchWeather);
    } else { 
      return(<Alert message="Geolocation is not supported by this browser." type="error" />);
    }
  }

  sendDataToBackend = async (valence) => {
    // sends data to the back end
    
    valence = parseFloat(valence);
    valence = valence / 100;

    var data = {
      "valence": valence,
      "weatherID": this.state.weather.id
    }
    console.log(data);
   
    let query = `http://localhost:3300/main/`;
    
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
        } else {
          console.log(query);
          console.log("error in fetching link");
        }
      }
    );
    this.setState({
      displayLoadingScreen: true,
      displayLocationButton: false,
      displayWeather: false,
      displaySlider: false
    });
  }

  render() {

    return (
      <>
        <FindCoordinates 
          displayLocationButton={this.state.displayLocationButton} 
          onClick={this.findLocation}
        />
        <Weather 
          displayWeather={this.state.displayWeather}
          city={this.state.city} 
          weather={this.state.weather.main} 
          description={this.state.weather.description} 
        />
        <Slider
          displaySlider={this.state.displaySlider}
          parentCallback={this.sendDataToBackend}
        />
        <LoadingScreen 
          displayLoadingScreen={this.state.displayLoadingScreen}
        />
        <Routes />
      </>
    );
  }
}
