import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from "react-router-dom";

/*CSS*/

const Error = styled.div`
    text-align: center;
    width: 40%;
    margin-left: 30%;
    margin-right:30%;
`;

const LastContainer = styled.div`
    text-align:center;
`;
const MainContainer = styled.div`
    width:350px;
    border-radius:10px;
    border: 2px solid #fff;
    margin-top: 1%;
    margin-left: calc(50% - 175px);
    margin-right: calc(50% - 175px);
`;
const Title = styled.div`
    font-size : 3rem;
    display:block;
    text-align:center;

`;
const Relative = styled.div`
    position:relative;
`;
const TextInput = styled.input`
    outline:none;
    width: 96%;
    margin:15px 2%;
    border: none;
    border-bottom: 2px solid #ccc;
    font-size: 1.5rem;
    box-sizing: border-box;
    color:black;   
    padding:5px 5px;
    display:block;

    &:focus{
        width: 96%;
        padding: 5px 5px;
        margin:15px 2%;
        font-size: 1.5rem;
        box-sizing: border-box;
        color:black;
    }
    &:focus ~ label{
        top:-13px;
        font-size:1.2rem;
        color:black;
    }
    &:valid ~ label{
        top:-13px;
        font-size:1.2rem;
        color:black;
    } 
`;
const TextLabel = styled.label`
    color:#999; 
    font-size:1.7rem;
    font-weight:normal;
    position:absolute;
    pointer-events:none;
    left:15px;
    top:5px;
    transition:0.2s ease all;
    -moz-transition:0.2s ease all; 
    -webkit-transition:0.2s ease all;
`;
const TextContainer = styled.div`
    width:100%;
    display:block;
`;
const CriarConta = styled.a`
    text-align:center;  
    width:100%;
    font-size: 13px;
    color:#0360ad;
    padding: 10px;
`;

const LittleText = styled.div`
    font-size: 16px;
    text-align:center;
    color:#040c27;
   
`;
const EnterButton = styled.button`
    border-radius:18px;
    border: none;
    color: white;
    text-align: center;
    cursor:pointer;
    padding: 15px 80px;
    font-size:1.1em;
    position:relative; 
    font-weight: bold;   
    background-image: linear-gradient(#0a6ead, blue);
    margin-top:10px;
`;

const Header = styled.div`
    width: 100%;
    height: 70px;
    background-color: #040c27;
    position: sticky;
`;

const ImagemContainer = styled.div`
    width: 100%;
    height: 420px;
    position: relative;
    overflow:hidden;
`;

const Imagem = styled.img`
    z-index: -1;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
`;
const INovaLogo = styled.img`
    margin:15px;
    height:40px;
`;

const StyledAvatar = withStyles({
    root: {
        margin: '8 px',
        backgroundColor: '#F1EAEA',
    },
})(Avatar)

const StyledPaper = withStyles({
    root: {
        padding: '20px 100px',
        textAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },

})(Paper)

const StyledButton = withStyles({
    root: {
        marginTop: '24px',
        marginLeft: '0px',
        marginLeft: '0px',
        marginBottom: '16px',

    },
})(Button)

const StyledTypography = withStyles({
    root: {
        fontWeight:'fontWeightBold',
        fontFamily:'Monospace',
        fontSize:'30px',
    },
})(Typography)

const StyledGrid = withStyles({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
})(Grid)

/*CSS*/


const Form = styled.div`
        width: 100%;
        margin-top: 24px
`;


export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            CPF: '',
            whatsapp: '',
            error: '',
            password: '',
            accountCreated: false,
        };
    }

    /*FUNCTIONS*/

    handleChangeWhatsapp = event => {
        this.setState({ whatsapp: event.target.value });
    };

    handleChangePassword = event => {
        this.setState({ password: event.target.value });
    };

    handleChangeName = event => {
        this.setState({ name: event.target.value });
    };

    handleChangeCPF = event => {
        this.setState({ CPF: event.target.value });
    };

    createAccount = () => {
        console.log('E - submit #form-signup');

        let newUserData = {
            username: this.state.whatsapp,
            password: this.state.password,
            profile: {
                name: this.state.name,
                cpf: this.state.CPF,
            },
        };

        if (newUserData.username !== '' && newUserData.password !== '' && newUserData.profile.cpf !== '' && newUserData.profile.name!== '') {
            Meteor.call('createNewUser', newUserData, (error) => {
                if (error) {
                    console.log(error);
                    if(error.reason === 'Username already exists.') {
                        this.setState({ error: 'Esse whatsapp já foi cadastrado.'});
                    } else {
                        this.setState({ error: error.reason });
                    }
                } else {
                    this.state.accountCreated = true;
                    console.log('Created Account');
                    this.props.history.push('/');
                }
            });
            console.log('Logged!');
        } else {
            this.setState({ error: 'Please provide all fields.'});
        }
    };
    
    enterPress = event => {
        let code = event.key;
        if(code === 'Enter'){
            this.createAccount();
        }
    };

    loginRoute = () => {
        if (Meteor.userId()) {
            Meteor.userId() ? this.props.history.push('/') : '';
        }
    };

    render() {

        return (
            <div>
                <Header><INovaLogo src="/images/iNova_logo.jpeg"/></Header>
                <MainContainer>
                    <Error>
                        { this.state.error ? <p className="alert alert-danger">{ this.state.error }</p> : '' }
                    </Error>
                        <Title>Cadastro</Title>
                        <LittleText>Venha navegar na Jangada com a gente! </LittleText>
                            <Form>
                                <Relative> 
                                    <TextContainer>
                                        <TextInput
                                            name="firstName"
                                            required
                                            id="firstName"
                                            autoComplete="name"
                                            value = {this.state.name}
                                            onChange = {this.handleChangeName}
                                            onKeyPress={this.enterPress}
                                        />
                                        <TextLabel>Nome Completo</TextLabel>
                                    </TextContainer>
                                </Relative>
                                <Relative> 
                                    <TextContainer>
                                        <TextInput
                                            required
                                            id="whatsapp"
                                            name="whatsapp"
                                            autoComplete="whatsapp"
                                            value = {this.state.whatsapp}
                                            onChange = {this.handleChangeWhatsapp}
                                            onKeyPress={this.enterPress}
                                        />
                                        <TextLabel>WhatsApp com DDD</TextLabel>
                                    </TextContainer>
                               </Relative>
                               <Relative> 
                                    <TextContainer>
                                        <TextInput
                                        required
                                        id="CPF"
                                        name="CPF"
                                        autoComplete="new-CPF"
                                        value = {this.state.CPF}
                                        onChange = {this.handleChangeCPF}
                                        onKeyPress={this.enterPress}
                                    />
                                        <TextLabel>CPF</TextLabel>
                                    </TextContainer>
                                </Relative>
                                <Relative> 
                                    <TextContainer>
                                        <TextInput
                                        required
                                        name="password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        value = {this.state.password}
                                        onChange = {this.handleChangePassword}
                                        onKeyPress={this.enterPress}
                                    />
                                        <TextLabel>Sua Senha</TextLabel>
                                    </TextContainer>
                                </Relative>

                           
                            <LastContainer>
                                <EnterButton variant="extended" aria-label="Delete"  onClick ={this.createAccount}>
                                    CADASTRAR!
                                </EnterButton>
                            </LastContainer>
                        </Form>
                        {this.loginRoute()}
                    {/*<Box mt={5}>
                        <Typography variant="body2" color="textSecondary" align="center">
                            <Link to="/"> Volte para o login! </Link>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align="center">

                            {'iNovaBank'}
                            
                            {' team.'}
                        </Typography>
                    </Box>*/}
                </MainContainer>
                <ImagemContainer>
                    <Imagem src="/images/log2.png" alt="foto"/>
               </ImagemContainer>
            </div>


        );
    }
}
