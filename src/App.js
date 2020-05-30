import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const add =(a,b) =>{
    return a+b;
  }
  
  return (
    <div className="App">
      <h1>ket qua dat được:{add(1,2)}</h1>
    </div>
  );
}

export default App;
