import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import BarTop from "./AppBar/BarTop.jsx";
import Grid from '@material-ui/core/Grid';
import Hidden from "@material-ui/core/Hidden";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

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
        this.state = {
            ...this.getMeteorData(),
            accountData: {
                accountBalance: undefined,
                availableBalance: undefined,
            },
        };
    }

    getMeteorData(){
        return { isAuthenticated: Meteor.userId() !== null };
    }

    componentWillMount(){
        if (!this.state.isAuthenticated) {
            this.props.history.push('/video');
        }
    }

    componentDidUpdate(prevProps, prevState){
        if (!this.state.isAuthenticated) {
            this.props.history.push('/video');
        }
    }

    getAccountData = () => {
        Meteor.call('getAccountData', (error, response) => {
            if(error) {
                console.log(error);
            } else {
                // console.log(response); // uncomment if want see whats getaccountdata returns
                this.setState({
                    accountData: {
                        accountBalance: response.summary.accountBalance,
                        availableBalance: response.summary.availableBalance,
                    },
                });
            }
        });
    };

    componentDidMount = () => {
        this.getAccountData();
    }


    /*FUNCTIONS*/

    // 1. Acrescentar coisas do Mifos

    render() {
        return (
            <PageWrapper>
                <MuiThemeProvider theme={theme} >
                    <CssBaseline />
                        <WrapperBar >
                            <BarTop {...this.props}/>
                        </WrapperBar>
                        <h1>MINHA CONTA</h1>
                        <h1>account balance: {this.state.accountData.accountBalance}</h1>
                        <h1>avaialable balance: {this.state.accountData.availableBalance}</h1>
                </MuiThemeProvider>
            </PageWrapper>
        );
    }
}
