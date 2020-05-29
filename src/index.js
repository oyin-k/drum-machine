import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

import PadContainer from "./PadContainer";

const App = () => {
  const [display, setDisplay] = useState("");

  const displayClipName = name => {
    return setDisplay(name);
  };

  return (
    <>
      <div className="drumpad-box">
        <div id="display" className="display-box">
          {display}
        </div>
        <PadContainer display={displayClipName} />
      </div>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
