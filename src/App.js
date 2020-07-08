//import React which is responsible for rendering things in the DOM and Component to extend the Component class
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.js";

class App extends Component {
  state = {
    persons: [
      { name: "Maximilian", age: 28 },
      { name: "Max1", age: 29 },
      { name: "Max2", age: 29 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    // DON'T DO THIS: this.state.persons[0].name = "Cristina";
    //This method ensures that react knows about the update of the state and re renders the dom
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Max1", age: 29 },
        { name: "Max2", age: 70 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        //extract the target, which is the input value, and get the value attribute from it
        { name: event.target.value, age: 29 },
        { name: "Max2", age: 70 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Jens!!!!!")}
              changed={this.nameChangedHandler}
            >
              My Hobbies: Climbing
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>
          {persons}
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, Im a react app!') )
  }
}

export default App;
