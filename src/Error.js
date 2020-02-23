import React, { Component, Fragment } from 'react';


class Error extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <Fragment>
                    <h1>Something Went Wrong</h1>
                </Fragment>
            )
        }
        return this.props.children;
    }
}

export default Error

