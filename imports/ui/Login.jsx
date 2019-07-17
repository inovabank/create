import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import {Hidden} from "@material-ui/core";
//import Foto from 'FotoDasCasas.png'

/*CSS*/
const Error = styled.div`
    text-align: center;
    width: 200px;
    position:relative;
    margin-left: calc(50% - 100px);
    margin-right:calc(50% - 100px);
    top:-455px;
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
    top: 160px;
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    margin-top:0px;
    padding: 0% 5%;
    background-color: white;
    position: sticky;
    margin-bottom:30px;
`;

const ImagemContainer = styled.div`
    width: 100%;
    top:280px;
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
    height:60px;
    float:left;
    margin-top:14px;
    margin-left:70px;
`;

const Button = styled.button`
    background-color:inherit;
    border:none;
    outline:none;  
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            whatsapp: '',
            password: '',
            error: '',
            redirect: false,
        };
        this.homepage = this.homepage.bind(this);
    }

    /*FUNCTIONS*/

    handleChangeWhatsapp = event => {
        if(!event.isTrusted) return;
        this.setState({ whatsapp: event.target.value });
    };

    handleChangePassword = event => {
        if(!event.isTrusted) return;
        this.setState({ password: event.target.value });
    };

    login = (event) => {
        event.preventDefault();

        Meteor.loginWithPassword(this.state.whatsapp, this.state.password, (err) => {
            if(err){
                this.setState({
                    error: err.reason
                });
            } else {
                this.props.history.push('/');
            }
        });

    };

    enterPress = event => {
        let code = event.key;
        if(code === 'Enter'){
            this.login(event);
        }
    };

    homepage(e){
        e.preventDefault();
        this.props.history.push('/');
    };

    render() {
        return (
            <Main>
                <Header>
                    <Button onClick={this.homepage}>
                         <JangadaLogo src="/images/Jangada2.png"/>
                    </Button>
                    <Hidden xsDown>
                    <Button onClick={this.homepage}>
                        <INovaLogo src="/images/inova_logo.png"/>
                    </Button>
                    </Hidden>
                </Header>
                <ImagemContainer onClick={this.homepage}>
                    <Imagem src="/images/log2.png" alt="foto"/>
                </ImagemContainer>
                <Error>
                    { this.state.error ? <p className="alert alert-danger">{ this.state.error }</p> : '' }
                </Error>
                <MainContainer>
                   <Title style={{fontWeight: 'bold',}}>Login</Title>
                   <LittleText>
                       Entre na Jangada com a gente! <br></br> 
                       <Link to="#" style={{fontSize: '13px',}}> Ainda não tem uma conta? Clique aqui!</Link>
                   </LittleText>
                   {/*<CriarConta> 
                       <Link to="/signup"> Ainda não tem uma conta? Clique aqui!</Link>
                   </CriarConta>*/}
                   <Relative>
                        <TextContainer>
                            <TextInput 
                                type="text"
                                value = {this.state.whatsapp}
                                onKeyPress={this.enterPress}
                                onChange = {this.handleChangeWhatsapp}
                                autoComplete="new-wpp"
                                required 
                            /> 
                            <TextLabel>WhatsApp com DDD</TextLabel>
                        </TextContainer>
                    </Relative>
                    <Relative>
                        <TextContainer>
                            <TextInput 
                                type="password"
                                value = {this.state.password}
                                onKeyPress={this.enterPress}
                                onChange = {this.handleChangePassword}
                                autoComplete="new-password"
                                required 
                            /> 
                            <TextLabel>Senha</TextLabel>
                        </TextContainer>
                    </Relative> 
                    <LastContainer>
                        <LoginButton variant="extended" aria-label="Delete"  onClick ={this.login}>
                            ENTRAR!
                        </LoginButton>
                    </LastContainer>
               </MainContainer>
            </Main>
        );
    }
}