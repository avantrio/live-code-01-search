import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ResultsComponent from './components/ResultsComponent';

function App() {
  return (
    <div className="App">
      <ResultsComponent 
        results={
          [
            {
              "id": 1,
              "state": "Finalized",
              "phone_type": "High End",
              "name": "Samsung Gaalxy",
              "model": "S10"
            },
            {
                "id": 2,
                "state": "Released",
                "phone_type": "High End",
                "name": "Samsung",
                "model": "A10"
            },
            {
                "id": 683435089,
                "state": "finalized",
                "phone_type": "Phone",
                "name": "Samsung Galaxy Note 4Samsung Galaxy Note 4Samsung Galaxy Note 4",
                "model": "SM-N910T"
            },
            {
                "id": 683435090,
                "state": "finalized",
                "phone_type": "Phone",
                "name": "Samsung Galaxy Note 4Samsung Galaxy Note 4Samsung Galaxy Note 4",
                "model": "SM-N910V"
            },
            {
                "id": 683435092,
                "state": "finalized",
                "phone_type": "Phone",
                "name": "Sprint Cell PhonesSamsung Galaxy Note 4Samsung Galaxy Note 4 Sprint",
                "model": "SM-N910P"
            },
            {
                "id": 683435093,
                "state": "finalized",
                "phone_type": "Phone",
                "name": "Samsung Galaxy Note 4Samsung Galaxy Note 4Samsung Galaxy Note 4",
                "model": "SAMSUNG-SM-N910A"
            },
            {
                "id": 683435100,
                "state": "finalized",
                "phone_type": "Phone",
                "name": "Samsung Galaxy AvantSamsung Galaxy AvantSamsung Galaxy Avant",
                "model": "SM-G386T"
            }
          ]
        }
      />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      </header>
      
    </div>
  );
}

export default App;
