import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import BarTopAccount from "./AppBar/BarTopAccount";
import Grid from '@material-ui/core/Grid';
import Hidden from "@material-ui/core/Hidden";
import CssBaseline from "@material-ui/core/CssBaseline";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

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

const MainTextFirst = styled.h5`
    text-align: center;
    font-family:'Helvetica';
    color:#0a6ead;
    margin-bottom: 5px;
    font-size:5rem;
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
    // account balance: Empréstimo ou Saldo? (fix this)
    // available balance: Saldo disponível

    render() {
        return (
            <PageWrapper>
                <MuiThemeProvider theme={theme} >
                    <CssBaseline />
                        <WrapperBar >
                            <BarTopAccount {...this.props}/>
                        </WrapperBar>
                        <MainTextFirst>

                        <h1>MINHA CONTA</h1>
                        </MainTextFirst>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} 
                                aria-controls="panel1a-content"
                                id="panel1a-header">

                                <h1>Saldo: </h1>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <h1>{this.state.accountData.accountBalance} </h1>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} 
                                aria-controls="panel1a-content"
                                id="panel1a-header">

                                <h1>Saldo disponível: </h1>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <h1>{this.state.accountData.availableBalance} </h1>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                </MuiThemeProvider>
            </PageWrapper>
        );
    }
}
