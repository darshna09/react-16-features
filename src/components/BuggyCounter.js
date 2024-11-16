import React from 'react';

/**
 * BuggyCounter Component throws error once the counter reaches 5.
 */
export default class BuggyCounter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }
    
    render() {
        if(this.state.counter === 5) {      // Error
            throw new Error('Crashed');
        } else {
            return (
                <h2 onClick={this.handleClick}>{this.state.counter}</h2>
            );
        }
    }
}
