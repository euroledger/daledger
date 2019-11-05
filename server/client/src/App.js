import React from 'react';
import logo from './components/header/logo2.png';
import './App.css';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          DA Ledger
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          for the Architects and the clients and the designers
        </a>
      </div>
    </div>
  );
}

export default App;