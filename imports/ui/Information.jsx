import React, { Component } from 'react';

export default class Information extends Component {

    constructor(props) {
        super(props);

        this.redirectToCreate = this.redirectToCreate.bind(this);
        this.logout = this.logout.bind(this);
    }

    /*FUNCTIONS*/

    redirectToCreate = () => {
        this.props.history.push('/create');
    };

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
                <h1>INFORMATION</h1>
                <button onClick={this.redirectToCreate}>Vá para o CREATE</button>
                <button onClick={this.logout}>Logout</button>
            </main>
        );
    }
}
