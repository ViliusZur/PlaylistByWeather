import React from "react";
import { Button } from "react-bootstrap";

export default function FindCoordinates(props) {
    const { locationButton, onClick } = props;

    if(locationButton){
        return(
            <>
                <Button variant="primary" type="button" onClick={onClick}>
                    Find my location
                </Button>
            </>
        )
    }
    else{
        return(<></>);
    }

}