//import React which is responsible for rendering things in the DOM and Component to extend the Component class
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.js";

class App extends Component {
  state = {
    persons: [
      { id:'fdfd',  name: "Maximilian", age: 28 },
      { id:'sdfq', name: "Max1", age: 29 },
      { id:'wfwf', name: "Max2", age: 29 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {

    const persons = this.state.persons.map(person => {
      if(person.id === id){
        person.name = event.target.value;
      }
    })
    this.setState({
      persons: persons
    })
    //find the index of the person in the array
    // const personIndex = this.state.persons.findIndex(p => {
    //   return p.id ===id;
    // })

    // //copy the values from the original person object to a variable
    // let person = {
    //   ...this.state.persons[personIndex]}

    // person.name = event.target.value;

    // const persons = [...this.state.persons]
    // persons[personIndex] = person;
    // this.setState({
    //   persons: persons
    // });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );


    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red') // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold') // classes = ['bold']
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button className="button" onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, Im a react app!') )
  }
}

export default App;
