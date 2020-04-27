import React from "react";
import { Button } from 'react-bootstrap';

export default function Weather(props) {
    const { city, weather, description, onClick } = props;
    let localWeather = city + ", " + weather + ": " + description;
    
    if(weather === undefined || city === undefined || description === undefined){
        return (<></>);
    }
    else{
        return (
            <>
                {localWeather}
                <Button variant="primary" onClick={onClick}>
                    Generate playlist
                </Button>
            </>
        );
    }
}