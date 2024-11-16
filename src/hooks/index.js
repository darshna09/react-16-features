import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Counter from './counter';
import CounterWithHook from './counterHook';
import Display from './display';
import SampleComponent from './smallExamples/dataMapping';

const App = ({randomFunction}) => {
    const [someProp, setSomeProp] = useState('Prop')
    
    return (
        <div>
            <h3>
                <Link to="/indecisionApp">Indecision App</Link>
            </h3>
            <hr/><h3>
                <Link to="/hooksReactConf">React Conf Hooks Introduction</Link>
            </h3><hr/>
            <Link to="/">Back</Link>
            <Counter/>
            <CounterWithHook />
            <br/><hr/><br/>
            <label>Prop in App = </label>
            <input value={someProp} onChange={(e) => setSomeProp(e.target.value)}></input>
            <Display someProp={someProp} setSomeProp={setSomeProp} />
            <SampleComponent />
            <input onChange={e => randomFunction(e.target.value)}></input>
        </div>
    );
};

export default App;
