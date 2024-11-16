// Options component

import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your options</h3>
            <button
                className="button--link"
                disabled={!props.hasOptions}
                onClick={props.handleDeleteOptions}
            >
                Remove All
            </button>
        </div>
        
        {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
        {
            props.options.map((option, index) => (
                <Option
                    option={option}
                    handleDeleteOption={props.handleDeleteOption}
                    key={index}
                    count={index + 1}
                />
            ))
        }
    </div>
);

export default Options;