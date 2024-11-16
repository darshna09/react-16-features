import React from 'react';

export default class ClassBasedComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Mary',
            surname: 'Poppins',
            width: window.innerWidth
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleWindowResize = this.handleWindowResize.bind(this);
    }

    componentDidMount() {
        // Document title change
        document.title = `${this.state.name} ${this.state.surname}`;

        // Window resize: attach event listener
        window.addEventListener('resize', this.handleWindowResize);
    }

    componentDidUpdate() {
        document.title = `${this.state.name} ${this.state.surname}`;
    }

    componentWillUnmount() {
        // Window resize: remove event listener
        window.removeEventListener('resize', this.handleWindowResize);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleSurnameChange(e) {
        this.setState({
            surname: e.target.value
        });
    }

    handleWindowResize() {
        this.setState({
            width: window.innerWidth
        });
    }

    render() {
        return (
            <div className="component_parent">
                <div className="form__class">
                    <div className="form__label">Name</div>
                    <input className="form__input" value={this.state.name} onChange={this.handleNameChange} />
                </div>
                <div className="form__class">
                    <div className="form__label">Surname</div>
                    <input className="form__input" value={this.state.surname} onChange={this.handleSurnameChange} />
                </div>
                <div className="form__class">
                    <div className="form__label">Width</div>
                    <div className="form__input form__text" >{this.state.width}</div>
                </div>
            </div>
        );
    }
}
