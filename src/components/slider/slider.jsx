import React, { useState } from "react";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import { Button } from "react-bootstrap";


export default function Valence(props) {
    const { displaySlider, parentCallback } = props;
    const [ value, setValue ] = useState(0);
    if(displaySlider) {
        return (
            <div>
                <div>
                    I am:
                    <RangeSlider
                        value={value}
                        onChange={changeEvent => setValue(changeEvent.target.value)}
                    />
                </div>
                <Button variant="primary" type="button" onClick={() => {parentCallback(value)}}>
                    Generate a playlist
                </Button>
            </div>
        );
    }
    else {
        return(<></>);
    }
}
