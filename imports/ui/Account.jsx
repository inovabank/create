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
import ButtonAccount from './button-account';
import Box from '@material-ui/core/Box';
import {position} from '@material-ui/system';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    display: flex;
    flex-direction: column;
    width: 80%;
    background-color:white;
    padding: 4px 5% 24px 5%;
    color:white;
`;

const FirstContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 4px 5% 24px 0%;
`;

const FirstContentRes = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4px 5% 24px 5%;
`;

const ColumnFirst = styled.div`
    display: flex;
`;

const MainTextFirst = styled.h3`
    font-family:'Bahnschrift';
    color:#000033;
    font-size:3.2rem;
    text-align:justify;
`;

const CifraText = styled.h3`
    font-family:'Bahnschrift';
    color:#000033;
    font-size:3.2rem;
    text-align:left;
`;

const SubText = styled.h3`
    font-family:'Bahnschrift';
    color:grey;
    margin-top: 0px;
    padding:0% 8%;
    font-size:1.4rem;
    text-align:justify;
    font-weight: 100;
`;

const ReceivedText = styled.h3`
    font-family:'Bahnschrift';
    color:#c2c2c2;
    font-size:3.2rem;
    text-align:right;
    margin-top: 0px;
    font-weight: 200;
    margin-bottom: 0px;
`;

const ReceivedTextCifra = styled.h3 `
    font-family:'Bahnschrift';
    color:#000033;
    font-size:3.2rem;
    text-align:right;
`

const ReceivedDiv = styled.div`
    font-family:'Bahnschrift';
    font-weight: 200;
    margin-top: 20px;
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
    display: flex;
`;

const SecondContentRespons = styled.div`
    padding: 4px 5% 25px 5%;
    display: flex;
    flex-direction: column;
`;

const SecondColumnsContent = styled.div`
    width: 100% ;
`;

const Third = styled.div` 
    width:100% ;
    background-color:#f6f6f6;
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

const SecondColumn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family:'Arial';
    color:#000033;
`;

const OpenValue = styled.div`
    font-family:'Bahnschrift';
    font-weight: 200;
    font-size: 140px;
    text-align:right;
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

    render() {
        return (
            <PageWrapper>
                <MuiThemeProvider theme={theme} >
                    <CssBaseline />
                        <WrapperBar >
                            <BarTop redirectToHome={true} {...this.props}/>
                        </WrapperBar>
                        
                        <First>
                            <Hidden smDown>
                                <FirstContent>
                                    <div>
                                    <Box
                                            bgcolor="white"
                                            color="white"
                                            position="absolute"
                                            zIndex="modal">
                                    <MainTextFirst>
                                        Valor devido:
                                    </MainTextFirst>
                                    <SubText>
                                        Parcelas pagas: 1 de 5
                                    </SubText>
                                    </Box>
                                    </div>
                                    <ReceivedDiv>
                                    <ReceivedText>
                                        Valor Recebido:
                                    </ReceivedText>
                                    <ReceivedText>
                                        R$ {this.state.accountData.accountBalance === 1 ? "1250,00" : this.state.accountData.accountBalance}
                                    </ReceivedText>
                                    </ReceivedDiv>
                                </FirstContent>
                                <SecondColumn>
                                    <CifraText>
                                            R$
                                    </CifraText>
                                    <OpenValue>
                                        {this.state.accountData.availableBalance === 1 ? "950,00" : this.state.accountData.availableBalance}
                                    </OpenValue>
                                </SecondColumn>
                            </Hidden>
                            <Hidden mdUp>
                                <FirstContentRes>
                                    <div>
                                        <MainTextFirst>
                                            Valor devido:
                                        </MainTextFirst>
                                        <SubText>
                                            Parcelas pagas: 1 de 5
                                        </SubText>
                                    </div>
                                    <ReceivedDiv >
                                        <ReceivedText>
                                            Valor Recebido:
                                        </ReceivedText>
                                        
                                            R$ {this.state.accountData.accountBalance === 1 ? "1250,00" : this.state.accountData.accountBalance}
                                        
                                    </ReceivedDiv>
                                </FirstContentRes>
                                <SecondColumn>
                                    <CifraText>
                                        R$
                                    </CifraText>
                                    <OpenValue>
                                        {this.state.accountData.availableBalance === 1 ? "950,00" : this.state.accountData.availableBalance}
                                    </OpenValue>
                                </SecondColumn>
                            </Hidden>                       
                        </First>              
                        <Second>
                        <Box
                                bgcolor="rgba(0,0,0,0)"
                                color="white"
                                position="absolute"
                                left= "16.5%"
                                top={130}
                                zIndex="tooltip"
                              >
                            <Hidden mdDown>
                            <SecondContent>
                                <SecondColumnsContent>
                                         <ButtonAccount {...this.state}/>
                                </SecondColumnsContent>
                            </SecondContent>
                            </Hidden>
                        </Box>
                            <Hidden lgUp>
                                <SecondContent>
                                    <SecondColumnsContent>
                                         <ButtonAccount {...this.state}/>
                                    </SecondColumnsContent>
                                </SecondContent>
                            </Hidden>
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
