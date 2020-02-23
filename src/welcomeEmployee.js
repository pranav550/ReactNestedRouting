import React, { Component, Fragment } from 'react';

function Welcome(props) {
    return (
        <Fragment>
            <h1>Hello Employee</h1>
            <h1>Welcome Back </h1>
            <button onClick={props.logoutHandler}>Logout</button>
        </Fragment>
    )
}

export default Welcome