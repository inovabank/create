import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import {withStyles} from '@material-ui/core/styles';
import BarTop from "./BarTop.jsx";
import Grid from '@material-ui/core/Grid';
import Hidden from "@material-ui/core/Hidden";

const PageWrapper = styled.div`
    height: 100%;
`;

const WrapperBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height:7%;
    
`;

export default class Account extends Component {

    constructor(props) {
        super(props);
        this.state = this.getMeteorData();
    }

    getMeteorData(){
        return { isAuthenticated: Meteor.userId() !== null };
    }

    /*FUNCTIONS*/

    // 1. Acrescentar coisas do Mifos

    render() {
        return (
            <PageWrapper>
                <WrapperBar >
                    <BarTop {...this.props}/>
                </WrapperBar>
            </PageWrapper>
        );
    }
}
