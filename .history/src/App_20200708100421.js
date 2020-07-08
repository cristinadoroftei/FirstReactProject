//import React which is responsible for rendering things in the DOM and Component to extend the Component class
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'


class App extends Component {
  state = {
    persons: [
      {name: 'Maximilian', age:28},
      {name: 'Max1', age:29},
      {name: 'Max2', age:29}
    ]
  }

  switchNameHandler = () => {
    console
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working</p>
        <button onClick={}>Switch name</button>
        <Person name= {this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name= {this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Climbing</Person>
        <Person name= {this.state.persons[2].name} age={this.state.persons[2].name}/>
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, Im a react app!') )
  }
}

export default App;
