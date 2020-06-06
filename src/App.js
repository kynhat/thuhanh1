import React from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD

function App() {

  const add =(a,b) =>{
    return a+b;
  }
  
  return (
    <div className="App">
      <h1>ket qua dat được:{add(1,2)}</h1>
=======
import Header from './component/header';
import Body from './component/body';
import Footer from './component/footer'
function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
     
>>>>>>> up date table
    </div>
  );
}

export default App;
