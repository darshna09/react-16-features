// Add Option Component
import React, { useState } from 'react';

// After using React Hook: useState
const AddOption = (props) => {
    const [ error, setError ] = useState(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = props.handleAddOption(option);

        setError(error);

        // If there is no error empty the input field.
        if (!error) {
            e.target.elements.option.value = '';
        }
    };

    return (
        <div>
            {error && <p className="add-option-error">{error}</p>}
            <form className="add-option" onSubmit={handleFormSubmit}>
                <input className="add-option__input" type='text' autoComplete='off' name='option'></input>
                <button className="button">Add option</button>
            </form>
        </div>
    );
}

export default AddOption;

// ****** For comparision with class component ******

// export default class AddOption extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleFormSubmit = this.handleFormSubmit.bind(this);

//         this.state = {
//             error: null
//         };
//     }

//     handleFormSubmit(e) {
//         e.preventDefault();
//         const option = e.target.elements.option.value.trim();
//         const error = this.props.handleAddOption(option);

//         this.setState(() => ({error}));

//         // If there is no error empty the input field.
//         if (!error) {
//             e.target.elements.option.value = '';
//         }
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.error && <p className="add-option-error">{this.state.error}</p>}
//                 <form className="add-option" onSubmit={this.handleFormSubmit}>
//                     <input className="add-option__input" type='text' autoComplete='off' name='option'></input>
//                     <button className="button">Add option</button>
//                 </form>
//             </div>
//         )
//     }
// }
