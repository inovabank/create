import React, { Component } from 'react';

export default class Title extends Component {

    constructor(props) {
        super(props); 
    }

    /*FUNCTIONS*/

    render() {
        return (
            <main>
                {this.props.title}
            </main>
        );
    }
}
