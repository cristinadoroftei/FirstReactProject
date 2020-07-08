//import React which is responsible for rendering things in the DOM and Component to extend the Component class
import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person.js";

const app = (props) => {

  const obj: {
    title: 'fff',
    
  }

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Maximilian", age: 28 },
      { name: "Max1", age: 29 },
      { name: "Max2", age: 29 },
    ],
    otherState: "some other value",
  });

  const switchNameHandler = () => {
    // console.log('Was clicked!')
    // DON'T DO THIS: this.state.persons[0].name = "Cristina";
    //This method ensures that react knows about the update of the state and re renders the dom
    setPersonsState({
      persons: [
        { name: "Jens", age: 28 },
        { name: "Max1", age: 29 },
        { name: "Max2", age: 70 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React app</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Climbing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, Im a react app!') )
};

export default app;
