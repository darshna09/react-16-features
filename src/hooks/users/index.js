import React from 'react';
import { Link } from 'react-router-dom';
import ClassBasedComponent from './classBasedComponent';
import FunctionalComponent from './functionalComponent';


const Users = () => {
    return (
        <div>
            <Link to="/">Back</Link>
            <div className="component_div">
                <ClassBasedComponent />
                <FunctionalComponent />
            </div>
        </div>
    );
}

export default Users;