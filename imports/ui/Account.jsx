import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import BarTop from "./AppBar/BarTop";
import Grid from '@material-ui/core/Grid';
import Hidden from "@material-ui/core/Hidden";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

const PageWrapper = styled.div`
    height: 100%;
    background: white;
`;

const WrapperBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height:7%;
`;

const First = styled.div`
    width:100% ;
    background-color:white;
    color:white;
`;

const FirstContent = styled.div`
    padding: 4px 5% 100px 5%;
`;

const MainTextFirst = styled.h3`
    font-family:'Arial';
    color:#8B008B;
    font-size:3.2rem;
    text-align:left;
`;

const CifraText = styled.h3`
    font-family:'Arial';
    color:#8B008B;
    font-size:3.2rem;
    text-align:left;
    padding:0% 26%;
`;

const SubText = styled.h3`
    font-family:'Arial';
    color:grey;
    padding:0% 8%;
    font-size:1.3rem;
`;

const ValorRecebido = styled.h3`
    font-family:'Arial';
    color:#8B008B;
    font-size:2rem;
    text-align:rigth;
    padding:0% 70%;
`;

const Second = styled.div`
    width:100% ;
    background-color:#f6f6f6;
    color:white;
    display: flex;
    justify-content: center;
`;

const SecondContent = styled.div`
    padding: 4px 5% 25px 5%;
`;

const SecondColumns = styled.button`
    margin:2% 1%;
    border-radius:18px;
    width:27%;
    padding: 5px 60px;
    font-size: 1.2em;
    font-weight: bold;
    text-align:center;
    background-color:white;
    color:gray;
    margin:10px;

`;

const SecondColumnsContent = styled.div`
    padding:7% 5%
`;

const Third = styled.div` 
    width:100% ;
    background-color:#e9e9e9;
    color:white;
`;

const ThirdContent = styled.div`
    padding: 4px 5% 100px 5%;
`;

const ThirdColumnsContent = styled.div`
    padding:7% 5%
`;

const Fourth = styled.div` 
    width:100% ;
    background-color:#081326;
    color:white;
`;

const FourthContent = styled.div`
    padding: 4px 5% 100px 5%;
`;

const FourthColumnsContent = styled.div`
    padding:7% 5%
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
                            <BarTop redirectToHome={true} {...this.props}/>
                        </WrapperBar>
                        <First>
                            <FirstContent>
                                <MainTextFirst>
                                    Valor em Aberto:
                                </MainTextFirst>
                                <SubText>
                                    Parcelas pagas: 1 de 5
                                </SubText>
                            </FirstContent>
                            <CifraText>
                                    R$ {this.state.accountData.availableBalance}
                            </CifraText>
                        </First>
                        <Second>
                            <SecondContent>
                                <SecondColumns>
                                    <SecondColumnsContent>
                                        <Typography  gutterBottom variant="h5" component="h2">
                                            Gerar boleto
                                        </Typography>
                                    </SecondColumnsContent>
                                </SecondColumns>
                                <SecondColumns>
                                    <SecondColumnsContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Meu grupo
                                        </Typography>
                                    </SecondColumnsContent>
                                </SecondColumns>
                                <SecondColumns>
                                    <SecondColumnsContent>
                                        <Typography  gutterBottom variant="h5" component="h2">
                                            Pedir crédito
                                        </Typography>
                                    </SecondColumnsContent>
                                </SecondColumns>
                            </SecondContent>
                        </Second>
                        <Third>
                            <ThirdContent>
                            <br/><br/><br/><br/><br/><br/><br/>
                            <br/><br/><br/><br/><br/><br/><br/>
                            </ThirdContent>
                        </Third>
                        <Fourth>
                            <FourthContent>

                            </FourthContent>
                        </Fourth>
                </MuiThemeProvider>
            </PageWrapper>
        );
    }
}
