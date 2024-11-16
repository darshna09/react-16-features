import React, { useState, useEffect } from 'react';
import ChildComponent from './childComponent';

// Component to demonstrate useState.
const SampleComponent = () => {
    const callback = (value) => {
        console.log('value ==>', value);
    }

    return (
        <div>
            <ChildComponent callback={callback}></ChildComponent>
        </div>
    )
}

export default SampleComponent;
