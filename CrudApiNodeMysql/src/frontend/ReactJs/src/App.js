import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mycomponente from './form/Mycomponent';

function Helloworld(props) {
  return(
    <div>
      <h2>{props.title}</h2>
      {props.mytext}
    </div>
  )
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Mycomponente title="Titulo" mytext="asdasd componente" />
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
};

export default App;
