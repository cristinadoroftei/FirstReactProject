//import React which is responsible for rendering things in the DOM and Component to extend the Component class
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working</p>
        <Person name= "Max" age="45"/>
        <Person name= "Max1" age="43">
        <Person name= "Max2" age="46"/>
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, Im a react app!') )
  }
}

export default App;
