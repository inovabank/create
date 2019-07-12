import { Meteor } from 'meteor/meteor';
import React, {Component} from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const MyAccount = styled.button`
    font-weight: bold;
    padding: 15px 5px;
    float:right;
    font-size:1.5rem;
    border:none;
    background-color:inherit;
`;

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
            <MyAccount size="large" color="inherit" onClick ={this.account}>Minha Conta</MyAccount>
        );
    }
}
