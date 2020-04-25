import React from 'react';
import Routes from '../routes';
import './homepage.css';
import { Link } from 'react-router-dom';
import { Button, Form, Alert } from 'react-bootstrap';

export default class Homepage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        latitude: "",
        longitute: "",
        weather: "",
        showSuccess: false,         //if we should be showing success message after adding user
        showError: false,           //if we should be showing error message
        errorCode: 400,
        responseStatus: "nothing",  //the validation status of the email 
        errorMessage: ""            //the error message to display to the user after server rejects action
    };
  };

  searchWeather = async (position) => {
    // get weather from users location using latitude and longitude
    console.log("searchWeather");

    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
    // save in local storage for future use
    localStorage.setItem("latitude", position.coords.latitude);
    localStorage.setItem("longitude", position.coords.longitude);

    let apiKey = "a4874b69f2735af868ede8a96278c415"
    let query = `api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`
    
    fetch(query, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }})
      .then(res => {
          if(res.ok) {
            res.json().then(json => {
              console.log(json);
              this.setState({
                weather: json.weather
              });
              
            });
          } else {
            console.log("error in fetching weather");
          }
      });
  }

  findLocation = e => {
    // find location of user (latitude and longitude)
    e.preventDefault();
    console.log("findLocation");

    var x = document.getElementById("location");
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.searchWeather);
    } else { 
      return(<Alert message="Geolocation is not supported by this browser." type="error" />);
    }
  }
/*
  showPosition(position) {
   
    console.log("Latitude: ", position.coords.latitude);
    console.log("<br>Longitude: ", position.coords.longitude);
  }
*/
  render() {
    return (
      <>
        this is Homepage

        <Button variant="primary" type="button" onClick={this.findLocation}>
            Find my location
        </Button>

        <Link to="/playlist"><Button>Generate</Button></Link>
        <Routes />
      </>
    );
  }
}
