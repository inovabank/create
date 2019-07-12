import { Meteor } from 'meteor/meteor';
import React, {Component} from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Logout1 = styled.button`
    font-weight: bold;
    padding: 15px 25px;
    font-size:1.5rem;
    border:none;
    background-color:inherit;
    margin-right:10px;
`;

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
            <Logout1 onClick ={this.logout}>Logout</Logout1>
        );
    }

}