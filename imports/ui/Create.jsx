import React, { Component } from 'react';

export default class Create extends Component {

    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    /*FUNCTIONS*/
    logout(e){
        e.preventDefault();
        Meteor.logout( (err) => {
            if (err) {
                console.log( err.reason );
            } else {
                this.props.history.push('/');
            }
        });
    };

    render() {
        return (
            <main>
                <h1>CREATE</h1>
                <button onClick={this.logout}>Logout</button>
            </main>
        );
    }
}
