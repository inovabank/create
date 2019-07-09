import { Meteor } from 'meteor/meteor';
import React, {Component} from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default class Logout extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

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
            <Button color="inherit" onClick ={this.logout}><Typography gutterBottom variant="h5" component="h2">Logout</Typography></Button>
        );
    }

}