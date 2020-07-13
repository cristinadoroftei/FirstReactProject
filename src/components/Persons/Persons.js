import React, {PureComponent} from 'react'

import Person from './Person/Person.js'

class Persons extends PureComponent{

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps')
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props)
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    if(nextProps.persons !== this.props.persons ||
      nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked){
      return true;
    }

    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate')
    return { message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate')
    console.log(snapshot)
  }
        render(){
          console.log('[Persons.hs] rendering...')
          return this.props.persons.map((person, index) => {
              return (
                //error boundary is a higher order component.
                //it's a component which wraps another component with the goal of handling any error that component might throw
  
                  <Person
                  key={person.id}
                  click={() => this.props.clicked(index)}
                  name={person.name}
                  age={person.age}
                  changed={(event) => this.props.changed(event, person.id)}
                />
             
              );
            })
        }

}

export default Persons;