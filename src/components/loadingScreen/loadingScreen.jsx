import React from "react";

export default function LoadingScreen(props) {
    const { displayLoadingScreen } = props;
    
    if(displayLoadingScreen){
        return (<>LOADING</>);
    }
    else{
        return (<></>);
    }
}