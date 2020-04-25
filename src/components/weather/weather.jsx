import React from "react";
import YearForm from "../yearForm/yearForm";

export default function Weather(props) {
    const { city, weather, description } = props;
    let localWeather = city + ", " + weather + ": " + description;
    
    if(weather === undefined || city === undefined || description === undefined){
        return (<></>);
    }
    else{
        return (
            <>
                {localWeather}
                <YearForm />
            </>
        );
    }
}
