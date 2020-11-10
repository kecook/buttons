import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import LargeButton from './Components/LargeButton/LargeButton'
import MedButton from './Components/MedButton/MedButton'
import SmallButton from './Components/SmallButton/SmallButton';



function App() {
  const [randomButtonTitle, setRandomButtonTitle] = useState(5.21);
  const [buttonCounterTitle, setButtonCounterTitle] = useState(0);
  // const [newState, setNewState] = useState();
  const [clickMe]= useState('click me');
  const [activeLink]=useState('Shoppies');

  function increaseButtonCounter() {
    setButtonCounterTitle(buttonCounterTitle + 1);
  }


  function changeButtonTitle() {
    const randomNumber = Math.random() * 10;
    const roundedNumber = randomNumber.toFixed(2);
    setRandomButtonTitle(roundedNumber);
  }

  function popUpAlert(){
    alert('You clicked me!')
  }

  
  


  
  console.log("Hi I am app and I rerendered");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
 
        <LargeButton
          buttonTitle={randomButtonTitle}
          callbackFunction={changeButtonTitle}
        />
        <LargeButton
          buttonTitle={buttonCounterTitle}
          callbackFunction={increaseButtonCounter}
        />

        <MedButton
        buttonTitle={clickMe}
        callbackFunction={popUpAlert}
        />

        <MedButton
        buttonTitle={clickMe}
        callbackFunction={popUpAlert}
        />
        
        <SmallButton
        buttonTitle={activeLink}
       />
        


</header> 
        
     
    </div>
  );
}

export default App;
