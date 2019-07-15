import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
//import Foto from 'FotoDasCasas.png'

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
    z-index:2;
    border-radius:10px;
    border: none;
    margin-left: calc(50% - 175px);
    margin-right: calc(50% - 175px);
    position: absolute;
    top: 15%;
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
    padding: 10px;
`;

const LoginButton = styled.button`
    border-radius:18px;
    border: none;
    color: white;
    text-align: center;
    cursor:pointer;
    padding: 15px 80px;
    font-size:1.1em;
    position:relative; 
    font-weight: bold;   
    background-image: linear-gradient(to right, #7B473B, #195474);
    margin-top:20px;
`;

const Header = styled.div`
    width: 100%;
    height: 70px;
    margin-top:0px;
    background-color: white;
    position: sticky;
`;

const ImagemContainer = styled.div`
    width: 100%;
    top:350px;
    height: 420px;
    position: relative;
    overflow:hidden;  
`;
const Imagem = styled.img`
    z-index: 1;
    margin-top: -45px;
    height: 100%;
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
`;
const INovaLogo = styled.img`
    height:50px;
    float:right;
    margin-top:35px;
    margin-right:70px;
`;
const JangadaLogo = styled.img`
    height:100px;
    float:left;
    margin-top:14px;
    margin-left:70px;
`;
const EnterButton = styled.button`
    border-radius:18px;
    border: none;
    color: white;
    text-align: center;
    cursor:pointer;
    padding: 15px 70px;
    font-size:1.1em;
    position:relative; 
    font-weight: bold;   
    background-image: linear-gradient(to right, #7B473B, #195474);
    margin-top:10px;
`;
export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            whatsapp: '',
            password: '',
            CPF: '',
            error: '',
            redirect: false,
            accountCreated: false,
    };
    }

    /*FUNCTIONS*/

    handleChangeName = event => {
        this.setState({ name: event.target.value });
    };

    handleChangeWhatsapp = event => {
        if(!event.isTrusted) return;
        this.setState({ whatsapp: event.target.value });
    };

    handleChangeCPF = event => {
        if(!event.isTrusted) return;
        this.setState({ CPF: event.target.value });
    };

    handleChangePassword = event => {
        if(!event.isTrusted) return;
        this.setState({ password: event.target.value });
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
                    this.login();
                    console.log('Created Account');
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

    login = () => {
        this.props.history.push('/login');

        /*Meteor.loginWithPassword(this.state.whatsapp, this.state.password, (err) => {
            if(err){
                this.setState({
                    error: err.reason
                });
            } else {
                this.props.history.push('/');
            }
        });*/

    };

    render() {
        return (
            <main>
                <Header>
                    <JangadaLogo src="/images/JangadaSolta.png"/>
                    <INovaLogo src="/images/inova_logo.png"/>
                </Header>
                <ImagemContainer>
                    <Imagem src="/images/log2.png" alt="foto"/>
                </ImagemContainer>
                <MainContainer>
                    <Error>
                        { this.state.error ? <p className="alert alert-danger">{ this.state.error }</p> : '' }
                        { this.state.accountCreated ? this.login() : ''}
                    </Error>
                   <Title style={{fontWeight: 'bold',}}>Cadastro</Title>
                   <LittleText>
                        Venha navegar na Jangada com a gente! <br></br> 
                        <CriarConta> 
                            <Link to="/login"> Já tem conta? Clique aqui!</Link>
                        </CriarConta>
                   </LittleText>
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
               </MainContainer>
            </main>
        );
    }
}