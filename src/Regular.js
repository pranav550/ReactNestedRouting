import React, { Component } from 'react';

class Regular extends Component {

    render() {
        console.log("Regular Component")
        return (
            <h1>Child Component:{this.props.name}</h1>
        )
    }
}


export default Regular
