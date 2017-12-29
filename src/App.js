import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Navigation extends Component {
  render(){
    return(
      <nav className="navbar">
        <h1 className="title">Favorite Murray</h1>
      </nav>
    );
  }
}

class TopPara extends Component {
  render(){
    return(
      <div className="top">
        <div className="image-one">
          <img src="https://www.fillmurray.com/200/300" alt="Fill Murray Pictures" />
        </div>
        <p className="top-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>

    );
  }
}

class BottomPara extends Component {
  render() {
    return (
      <div className="bottom">
        <div className="image-two">
          <img src="https://www.fillmurray.com/300/300" alt="Fill Murray Pictures" />
        </div>
        <p className="bottom-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </p>
      </div>
    );
  }
}

class MurrayForm extends Component {
  render() {
    return (
      <div className="murrayinator">
        <h3>"What's your favorite Murray Movie?"</h3>
        <form className="murray-form" action="" method="">
          <label htmlFor="murray-movie">Type your favorite movie here...</label>
          <input type="text" id="murray-movie" />
          <button>Submit</button>
        </form>
        <div className="answer">
          <h4 className="murray-display"></h4>
        </div>
      </div>
    );
  }
}

class MainBody extends Component {
  render(){
    return(
      <div className="main-body">
        <TopPara />
        <BottomPara />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation /> //added the Navigation component
        <MainBody /> //added the MainBody Component
        <MurrayForm /> //added the MurrayForm component
      </div>
    );
  }
}

export default App;
