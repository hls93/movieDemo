//############### navigation.js ####################
// Our newly created src/Components/navigation.js
// would look like this...
import React, { Component } from 'react';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar">
        <h1 className="title">Favorite Murray</h1>
      </nav>
    );
  }
}
// We used import to bring in React and React.Component
// We used export default to export our Navigation Component
