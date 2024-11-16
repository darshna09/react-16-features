import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            errorInfo: null
        };
    }

    // Catches exceptions generated in descendant components. Unhandled exceptions will cause the entire component tree to unmount.
    componentDidCatch(error, errorInfo) {
        this.setState(() => ({
            error: error,
            errorInfo: errorInfo
        }));
    }
    
    render() {
        if(this.state.errorInfo) {
            // Render fallback UI in case of error.
            return (
                <div>
                    <h4>Something went wrong!</h4>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br/>
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        } else {
            // Render Children
            return this.props.children;
        }
    }
}
