import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  const [currentGreeting, setCurrentGreeting] = useState();

  useEffect(() => {
    fetch('/greet').then(res => res.json()).then(data => {
      setCurrentGreeting(data.greet);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">

      <img src={logo} className="App-logo" alt="logo" />
        <p>{currentGreeting}</p>
      </header>
    </div>
  );
}

export default App;
