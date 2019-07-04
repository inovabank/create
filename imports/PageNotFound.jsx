import React, { Component } from 'react';

export default class PageNotFound extends Component {
    constructor(props) {
        super(props);
    }

    redirect = () => {
        this.props.history.push('/');
    };

    render() {
        return (
            <main>
                {this.redirect()}
            </main>
        );
    }
}
