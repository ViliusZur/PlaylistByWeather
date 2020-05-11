// this file closes the tab (/close)

import React from "react";

export default function App() {
    const onClose = () => {
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