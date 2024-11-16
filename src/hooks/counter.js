import React from 'react';

// Counter: Class Component. We need count state.
export default class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <h1>Count = {this.state.count}</h1>
                <button onClick={() => this.setState((prevState) => ({count: prevState.count + 1}))}>+</button>
                <button onClick={() => this.setState((prevState) => ({count: prevState.count - 1}))}>-</button>
                <button onClick={() => this.setState(() => ({count: 0}))}>Reset</button>
            </div>
        );
    }
}