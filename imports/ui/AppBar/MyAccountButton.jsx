import { Meteor } from 'meteor/meteor';
import React, {Component} from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default class MyAccountButton extends Component {
    constructor(props){
        super(props);
        this.account = this.account.bind(this);
    }

    /*FUNCTIONS*/

    account(e){
        e.preventDefault();
        this.props.history.push('/account');
    };

    render() {
        return (
            <Button size="large" color="inherit" onClick ={this.account}><Typography gutterBottom variant="h5" component="h2">Minha Conta</Typography></Button>
        );
    }
}