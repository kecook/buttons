import React from "react";
import "./MedButton.css";

function MedButton(props) {
  const { buttonTitle, callbackFunction } = props;
  
  
  return (
    <button onClick={() => callbackFunction()} className="MedButton">
      {buttonTitle}
    </button>
  );
}

export default MedButton;