import React from 'react'

import Person from './Person/Person.js'

const persons = (props) => {
        return props.persons.map((person, index) => {
            return (
              //error boundary is a higher order component.
              //it's a component which wraps another component with the goal of handling any error that component might throw

                <Person
                key={person.id}
                click={() => props.clicked(index)}
                name={person.name}
                age={person.age}
                changed={(event) => props.changed(event, person.id)}
              />
           
            );
          })
}

export default persons;