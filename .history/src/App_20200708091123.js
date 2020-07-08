//import React in order to get the render() method and Component to extend 
import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
      </div>
    );
  }
}

export default App;
