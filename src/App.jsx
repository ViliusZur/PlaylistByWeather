import React from "react";
import "./App.css";
import Homepage from "./homepage/homepage.jsx";
import LoadingScreen from "./loadingScreen/loadingScreen.jsx";

function App(props) {
  
  if(window.location.href.indexOf("loading") > -1) {
    return ( <LoadingScreen /> );
  } else{
  return ( <Homepage /> );
  }
}

export default App;
