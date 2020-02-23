import React, { Component, Fragment } from 'react';

function Guest(props) {
    return (
        <Fragment>
            <h1>Hello Guest</h1>
            <h1>Please Login </h1>
            <button onClick={props.loginHandler}>Login</button>
        </Fragment>
    )
}

export default Guest