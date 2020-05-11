import React from "react";

export default function Weather(props) {
    const { displayWeather, city, weather, description } = props;
    let localWeather = city + ", " + weather + ": " + description;
    
    if(weather === undefined || city === undefined || description === undefined || displayWeather === false){
        return (<></>);
    }
    else{
        return (
            <>
                {localWeather}
            </>
        );
    }
}
