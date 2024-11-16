import React from 'react';

// Component to demonstrate useState.
const ChildComponent = (props) => {
    return (
        <div>
            <button onClick={() => props.callback(false)}>Callback</button>
        </div>
    )
}

export default ChildComponent;
