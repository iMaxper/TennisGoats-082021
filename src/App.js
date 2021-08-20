import React from 'react';
import DataView from './components/DataView.js';
import Navbar from './components/Navbar.js';
import './App.css';
import data from './PlayerData.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1 className="header">Greatest of all time in Tennis</h1>
        {data.map(player => <DataView player={player} />)}
    </div>
  );
}

export default App;