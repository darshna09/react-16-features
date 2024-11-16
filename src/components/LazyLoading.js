import React, { lazy, Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';

// Delay in importing BuggyCounter.
// To use Async/Await import babel-polyfill.

const BuggyCounter = lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 2 * 1000)).then(
      () => import("./BuggyCounter")
    );
});

const LazyLoading = () => {
    return (
        <>
            <h1>Lazy Loading Buggy Counter</h1>
            <ErrorBoundary>
                <Suspense fallback={<div>Wait for a moment...</div>}>
                    <h3>Here is your buggy counter!</h3>
                    <BuggyCounter />
                </Suspense>
            </ErrorBoundary>
        </>
    );
}

export default LazyLoading;
