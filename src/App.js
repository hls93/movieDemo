import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Component imports
import Navigation from './Components/navigation.js';
import MainBody from './Components/mainbody.js';
import MurrayForm from './Components/murrayform.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <MainBody />
        <MurrayForm />
      </div>
    );
  }
}

export default App;
