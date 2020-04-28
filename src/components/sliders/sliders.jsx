import React, { useState } from "react";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import { Button } from 'react-bootstrap';

export default function Weather(props) {
    const { show, onClick } = props;
    const [ value, setValue ] = useState(0);
    if(show) {
        return (
            <div>
                <div>
                    I want to:
                    <RangeSlider
                        value={value}
                        onChange={changeEvent => setValue(changeEvent.target.value)}
                    />
                </div>
                <div>
                    I am:
                    <RangeSlider
                        value={value}
                        onChange={changeEvent => setValue(changeEvent.target.value)}
                    />
                </div>
                <Button variant="primary" type="button" onClick={onClick}>
                    Find my location
                </Button>
            </div>
        );
    }
    else {
        return(<></>);
    }
}
