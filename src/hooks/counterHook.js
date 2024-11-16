import React, { useState } from 'react';

// Component to demonstrate useState.
const CounterWithHook = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Count = {count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default CounterWithHook;
