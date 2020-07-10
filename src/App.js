//import React which is responsible for rendering things in the DOM and Component to extend the Component class
import React, { Component } from "react";
import classes from "./App.css";
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
        return person.name = event.target.value;
      }
      return person;
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
    let btnClass = ''

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

      btnClass= classes.Red;
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red) // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold) // classes = ['bold']
    }
    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React app</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, Im a react app!') )
  }
}

export default App;
