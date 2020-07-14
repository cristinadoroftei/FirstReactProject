import React, { Component } from "react";

import Aux from "../../../hoc/Auxiliary.js";
import classes from "./Person.css";
import withClass from "../../../hoc/withClass.js";

class Person extends Component {

    constructor(props) {
        super()
        this.inputElementRef = React.createRef()
    }
  componentDidMount() {
      this.inputElementRef.current.focus()
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!!
        </p>
        <p>{this.props.children}</p>
        <input
        //   ref={(inputEl) => {this.inputElement = inputEl}}
        ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        ></input>
      </Aux>
    );
  }
}

export default withClass(Person, classes.Person);
