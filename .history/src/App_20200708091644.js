//import React which is responsible for rendering things in the DOM and Component to extend the Component class
import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>Hi, I'm a React app</h1>
    //   </div>
    // );
    return React.createElement('div', null, 'h1')
  }
}

export default App;
