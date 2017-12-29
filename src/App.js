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

class App extends Component {
  render() {
    return (
      <Navigation /> //added the Navigation component
      <div className="App">
        <main className="main-body">
          <div className="top">
            <div className="image-one">
              <img src="https://www.fillmurray.com/200/300" alt="Fill Murray Pictures" />
            </div>
            <p className="top-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>
          <div className="bottom">
            <div className="image-two">
              <img src="https://www.fillmurray.com/300/300" alt="Fill Murray Pictures" />
            </div>
            <p className="bottom-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>
        </main>
        <div className="murrayinator">
          <h3>What is your favorite Murray Movie?</h3>
          <form className="murray-form" action="" method="">
            <label htmlFor="murray-movie">Type your favorite movie here...</label>
            <input type="text" id="murray-movie" />
            <button>Submit</button>
          </form>
        </div>
        <div className="answer">
          <h4 className="murray-display"></h4>
        </div>
      </div>
    );
  }
}

export default App;
