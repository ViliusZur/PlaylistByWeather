// this file closes the tab (/close)

import React from "react";

export default function App() {
    const onClose = async () => {

      // we use a fetch command to return to back end before closing the window
      let query = `http://localhost:3300/Spotify/topArtists`;
    
      await fetch(query, {
        method: "GET",
        headers: 
        {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        }).then(res => {
          if(res.ok) {
              // do something here if the response is ok
              console.log("response is ok");
          } else {
            console.log(query);
            console.log("error in fetching link");
          }
        }
      );

      window.opener = null;
      window.open("", "_self");
      window.close();
    };
  return (
    <>
        {onClose()}
    </>
  );
}