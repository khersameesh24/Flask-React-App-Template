import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  const [currentTemplate, setCurrentTemplate] = useState();

  useEffect(() => {
    fetch('/test-route').then(res => res.json()).then(data => {
      setCurrentTemplate(data.context);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">

      <img src={logo} className="App-logo" alt="logo" />
        <p>{currentTemplate}</p>
      </header>
    </div>
  );
}

export default App;
