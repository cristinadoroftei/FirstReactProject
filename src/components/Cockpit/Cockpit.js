import React, { useEffect, useRef } from "react";
import classes from './Cockpit.css'

const cockpit = (props) => {
  const toggleButtonRef = useRef(null);


  useEffect(()=> {
    console.log('[Cockpit.js] useEffect()')
    toggleButtonRef.current.click()
    return () => {
      //this method runs BEFORE the main useEffect() and after rendering the component
      console.log('[Cockpit.js] cleanup work in useEffect()')
    }
  }, [])

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect')
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect()')
    }
  }, [props.persons])
    
    let assignedClasses = [];
    let btnClass = ''
    if(props.showPersos) {
        btnClass= classes.Red;
    }
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red) // classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold) // classes = ['bold']
    }
    

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button ref={toggleButtonRef} className={btnClass} onClick={props.clicked}>
        Toggle persons
      </button>
    </div>
  );
};

export default React.memo(cockpit);
