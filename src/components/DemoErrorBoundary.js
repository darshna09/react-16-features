import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import BuggyCounter from './BuggyCounter';

const DemoErrorBoundary = () => (
    <div>
        {/* Behaviour in React 16 without error boundary. Whole React component tree will collapse. */}
        <h3>Behaviour in React 16 without error boundary. Whole React component tree will collapse.</h3>
        <BuggyCounter />
        
        <hr/>

        {/* Simple example with error boundary */}
        <h3>Simple example with error boundary</h3>
        <ErrorBoundary>
            <BuggyCounter />
        </ErrorBoundary>

        <hr/>

        {/* If one counter crahses, both the counters will be replaced with error boundary. */}
        <h3>If one counter crahses, both the counters will be replaced with error boundary.</h3>
        <ErrorBoundary>
            <BuggyCounter />
            <BuggyCounter />
        </ErrorBoundary>

        <hr/>

        {/* Both the counters are inside their error boundary, if one crahses other one will remain. */}
        <h3>Both the counters are inside their error boundary, if one crahses other one will remain.</h3>
        <ErrorBoundary>
            <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
            <BuggyCounter />
        </ErrorBoundary>
    </div>
);

export default DemoErrorBoundary;
