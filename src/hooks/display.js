import React, { useState, useEffect } from 'react';

const Display = (props) => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    // --> useEffect: fires when component mounts (componentDidMount), prop or state updates (componentDidUpdate).

    // This gets fired for change in value1 and value2 states and props
    // useEffect(() => {
    //     console.log(`value1 = ${value1}`);
    //     console.log(`value2 = ${value2}`);
    //     console.log(`props.someProp = ${props.someProp}`);
    // });

    // Making useEffect work as componentDidMount
    // This gets fired for change in value1 and value2 states and props once when the component mounts.
    useEffect(() => {
        console.log(`value1 = ${value1}`);
        console.log(`value2 = ${value2}`);
        console.log(`props.someProp = ${props.someProp}`);
    }, []);

    // ***** Optimizing Performance by Skipping Effects  ***** 

    // // This gets fired for change in value1 state only
    // useEffect(() => {
    //     console.log(`value1 = ${value1}`);
    // }, [value1]);

    // // This gets fired for change in value2 state only
    // useEffect(() => {
    //     console.log(`value2 = ${value2}`);
    // }, [value2]);

    // // This gets fired for change in props only.
    // useEffect(() => {
    //     console.log(`props.someProp = ${props.someProp}`);
    // }, [props]);

    return (
        <>
            <div>
                <h3>Prop coming from parent App</h3>
                <p>{props.someProp}</p>
                <h3>Altering the state of parent App</h3>
                <input value={props.someProp} onChange={(e) => props.setSomeProp(e.target.value)}></input>
            </div>
            <div>
                <h3>Open Console.</h3><br/>
                <label>First field:</label>
                <input value={value1} onChange={(e) => setValue1(e.target.value)}></input>
                <br/><br/>
                <label>Second field:</label>
                <input value={value2} onChange={(e) => setValue2(e.target.value)}></input>
            </div>
        </>
    );
}

export default Display;