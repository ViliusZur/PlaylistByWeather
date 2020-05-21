import React, { useState } from "react";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RangeSlider from 'react-bootstrap-range-slider';
import "./slider.css";


export default function Valence(props) {
    const { parentCallback } = props;
    const [ value, setValue ] = useState(50);

    return (
        <>
            <div class="text">
                Select your mood
            </div>
            <div class="slider">
                <div class="sad">Sad :(</div>
                <div class="happy">Happy :)</div>
                <RangeSlider
                    value={value}
                    tooltip={"off"}
                    onChange={changeEvent => setValue(changeEvent.target.value)}
                    variant="success"
                    size="lg"
                />
            </div>
            <div class="button-div">
                <button class="button" variant="primary" type="button" onClick={() => {parentCallback(value)}}>
                    Generate a playlist
                </button>
                <div class="name">Playlist name "Mood: {value}"</div>
            </div>
        </>
    );
    
}
