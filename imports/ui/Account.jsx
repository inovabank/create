import React, { Component } from 'react';

export default class Information extends Component {

    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    /*FUNCTIONS*/

    // Acrescentar coisas do Mifos

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
                <h1>MINHA CONTA</h1>
                <button onClick={this.logout}>Logout</button>
            </main>
        );
    }
}
