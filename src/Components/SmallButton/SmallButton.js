import React from "react";
import './SmallButton.css'


function SmallButton(props) {
  const { buttonTitle } = props;
  
  return (
      <a href="https://my-shoppies.netlify.app/">
    <button className="SmallButton">
      {buttonTitle}
    </button>
    </a>
  );
}

export default SmallButton;