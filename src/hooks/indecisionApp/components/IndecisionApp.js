// Indecision applicartion

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

// Indecision app using React Hooks.

const IndecisionApp = () => {
    // State variables
    const [ options, setOptions ] = useState([]);
    const [ selectedOption, setSelectedOption] = useState(null);
    const [ modalOpen, setModalOpen ] = useState(false);

    // Fetching data from local storage when the component mounts: componentDidMount
    useEffect(() => {
        try {
            const jsonOptions = localStorage.getItem('optionsData');
            const options = JSON.parse(jsonOptions);
            if (options) {
                setOptions(options);
            }
        } catch (e) {
            console.error('Error occurred while fetching data. ==> ', e);
        }
    }, []);

    // Save options array inside local stotage
    useEffect(() => {
        const jsonOptions = JSON.stringify(options);
        localStorage.setItem('optionsData', jsonOptions);
    }, [options]);

    const title = 'Indecision App';
    const subtitle = 'Put your life in hands of a computer.';

    // Add option
    const handleAddOption = (option) => {
        if(!option) {
            return 'Enter a valid value to add the option.';
        } else if(options.includes(option)) {
            return 'This option already exists.';
        }
        setOptions(prevOption => ([...prevOption, option]));
    };

    // Handle pick option, open modal
    const handlePick = () => {
        const randomNumber = Math.floor(Math.random() * options.length);
        const randomOption = options[randomNumber];
        
        setModalOpen(true);
        setSelectedOption(randomOption);
    };

    const handleClearSelectedOption = () => {
        setModalOpen(false);
    };

    // Delete all options
    const handleDeleteOptions = () => {
        setOptions([]);
    };

    // Delete selection option
    const handleDeleteOption = (optionToRemove) => {
        setOptions(prevOption => (prevOption.filter(option => option !== optionToRemove)));
    };

    return (
        <div>
            <Link to="/">Back</Link>
            <Header title={title} subtitle={subtitle}/>
            <div className="container">
                <Action 
                    hasOptions={options.length > 0}
                    handlePick={handlePick}
                />
                <div className="widget">
                    <Options 
                        options={options}
                        hasOptions={options.length > 0}
                        handleDeleteOptions={handleDeleteOptions}
                        handleDeleteOption={handleDeleteOption}
                    />
                    <AddOption handleAddOption={handleAddOption}/>
                </div>
            </div>
            <OptionModal
                modalOpen={modalOpen} 
                selectedOption={selectedOption}
                handleClearSelectedOption={handleClearSelectedOption}
            />
        </div>
    )
}

export default IndecisionApp;

// export default class IndecisionApp extends React.Component {
//     constructor(props) {
//         super(props);

//         this.handlePick = this.handlePick.bind(this);
//         this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
//         this.handleDeleteOption = this.handleDeleteOption.bind(this);
//         this.handleAddOption = this.handleAddOption.bind(this);
//         this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);

//         this.state = {
//             options: [],
//             selectedOption: null,
//             modalOpen: false
//         };
//     }

//     handlePick() {
//         const randomNumber = Math.floor(Math.random() * this.state.options.length);
//         const randomOption = this.state.options[randomNumber];
        
//         this.setState(() => ({modalOpen: true, selectedOption: randomOption}))
//     }

//     handleDeleteOptions() {
//         this.setState(() => ({options: []}));
//     }

//     handleDeleteOption(optionToRemove) {
//         this.setState((prevState) => ({
//             options: prevState.options.filter(option => option !== optionToRemove)
//         }));
//     }

//     handleAddOption(option) {
//         if(!option) {
//             return 'Enter a valid value to add the option.';
//         } else if(this.state.options.includes(option)) {
//             return 'This option already exists.';
//         }

//         this.setState((prevState) => ({options: prevState.options.concat([option])}));
//     }

//     handleClearSelectedOption() {
//         this.setState(() => ({modalOpen: false}));
//     }

//     /** Fetch options array from local stotage */
//     componentDidMount() {
//         try {
//             const jsonOptions = localStorage.getItem('optionsData');
//             const options = JSON.parse(jsonOptions);
//             if (options) {
//                 this.setState(() => ({options}));
//             }
//         } catch (e) {
//             console.error('Error occurred while fetching data. ==> ', e);
//         }
//     }

//     /** Save options array inside local stotage */
//     componentDidUpdate(prevProps, prevState) {
//         if(prevState.options.length !== this.state.options.length) {
//             const jsonOptions = JSON.stringify(this.state.options);
//             localStorage.setItem('optionsData', jsonOptions);
//         }
//     }

//     render() {
//         const title = 'Indecision App';
//         const subtitle = 'Put your life in hands of a computer.';
//         return (
//             <div>
//                 <Header title={title} subtitle={subtitle}/>
//                 <div className="container">
//                     <Action 
//                         hasOptions={this.state.options.length > 0}
//                         handlePick={this.handlePick}
//                     />
//                     <div className="widget">
//                         <Options 
//                             options={this.state.options}
//                             hasOptions={this.state.options.length > 0}
//                             handleDeleteOptions={this.handleDeleteOptions}
//                             handleDeleteOption={this.handleDeleteOption}
//                         />
//                         <AddOption handleAddOption={this.handleAddOption}/>
//                     </div>
//                 </div>
//                 <OptionModal
//                     modalOpen={this.state.modalOpen} 
//                     selectedOption={this.state.selectedOption}
//                     handleClearSelectedOption={this.handleClearSelectedOption}
//                 />
//             </div>
//         )
//     }
// }
