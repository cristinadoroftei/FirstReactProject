//import React which is responsible for rendering things in the DOM and Component to extend the Component class
import React, { Component } from "react";
import classes from "./App.css";
import Persons from '../components/Persons/Persons.js'
import Cockpit from "../components/Cockpit/Cockpit.js"
import withClass from "../hoc/withClass.js"
import Aux from "../hoc/Auxiliary.js"

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
  }
  state = {
    persons: [
      { id:'fdfd',  name: "Maximilian", age: 28 },
      { id:'sdfq', name: "Max1", age: 29 },
      { id:'wfwf', name: "Max2", age: 29 },
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDeriverStateFromProps')
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount')
  // }

  componentDidMount(){
    console.log('[App.js] componentDidMount')
  }

  nameChangedHandler = (event, id) => {

    const persons = this.state.persons.map(person => {
      if(person.id === id){
        person.name = event.target.value;
      }
      return person;
    })

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    })
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

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate')
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate')
  }

  render() {
    console.log('[App.js] render')
    let persons = null;

    if (this.state.showPersons) {
      persons = (
          < Persons
           persons = {this.state.persons}
           clicked = {this.deletePersonHandler}
           changed = {this.nameChangedHandler}/>
      );

    }

    return (
      <Aux classes={classes.App}>
        <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
        {this.state.showCockpit ? 
        <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/> : null }
        {persons}
      </Aux>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, Im a react app!') )
  }

  
}

export default withClass(App, classes.App);
