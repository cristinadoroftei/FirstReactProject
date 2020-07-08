import React from 'react';


const person = (props) => {
    return <p>I'm {props.name}  and I am {Math.floor(Math.random() * 30)} years old!!</p>
};


export default person;