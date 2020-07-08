//import React which is responsible for rendering things in the DOM and Component to extend the Component class
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'


class App extends Component {
  state = {
    persons: [
      {name: 'Maxi', age:28},
      {name: 'Max1', age:29},
      {name: 'Max2', age:29}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working</p>
        <button>Switch name</button>
        <Person name= {this.state.persons[0].name} age="45"/>
        <Person name= "Max1" age="43">My Hobbies: Climbing</Person>
        <Person name= "Max2" age="46"/>
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, Im a react app!') )
  }
}

export default App;
