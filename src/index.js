import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from "./App";


class Employee extends Component {

    render() {
        return (
            <Fragment>
                <App />
            </Fragment>
        )
    }


}





ReactDOM.render(<Employee />, document.getElementById("root"))