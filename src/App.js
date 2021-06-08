import React, { useState } from 'react';
import './App.css';
import Switch from './Switch';

const App = () => {
  const [firstCast, setfirstCast] = useState(1);
  const [secondCast, setsecondCast] = useState(6);
  const [value, setValue] = useState(false);

  const firstCastImage = require(`./images/${firstCast}.png`);
  const secondCastImage= require(`./images/${secondCast}.png`);


  function castDice() {
    setfirstCast(Math.floor(Math.random() * 6) + 1);
    setsecondCast(Math.floor(Math.random() * 6) + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <div style={{ display: 'flex', margin: 20 }}>
          <img src={firstCastImage} className="die" alt="Die one" />
          <img src={secondCastImage} className="die" alt="Die two" />
        </div>
        <span>{firstCast + secondCast}</span>
        <button className="button" onClick={castDice}>Click Me</button>
        <div>
          <Switch 
          isOn={value} handleToggle={() => setValue(!value)}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
