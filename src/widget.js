import React, { Component, Fragment } from 'react';


class Widget extends Component {

    render() {
        if (this.props.Logo === '') {
            throw new Error('Image not Found')
        }
        return (
            <Fragment>
                <h1>Profile Image</h1>
                <img src={this.props.Logo} alt="Profile image" />
            </Fragment>
        )
    }
}

export default Widget

