import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';


/*CSS*/
const LastContainer = styled.div`
    text-align:center;
`;
const MainContainer = styled.div`
    width:30%;
    border-radius:10px;
    border: 2px solid #ccc;
`;
const Title = styled.div`
    font-size : 2vw;
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
    font-size: 1.1vw;
    box-sizing: border-box;
    color:black;   
    padding:5px 20px;
    display:block;

    &:focus{
        width: 96%;
        padding: 5px 20px;
        margin:15px 2%;
        font-size: 1.1  vw;
        box-sizing: border-box;
        color:black;
    }
    &:focus ~ label{
        top:-13px;
        font-size:0.8vw;
        color:black;
    }
    &:valid ~ label{
        top:-13px;
        font-size:0.8vw;
        color:black;
    } 
`;
const TextLabel = styled.label`
    color:#999; 
    font-size:1.2vw;
    font-weight:normal;
    position:absolute;
    pointer-events:none;
    left:35px;
    top:5px;
    transition:0.2s ease all;
    -moz-transition:0.2s ease all; 
    -webkit-transition:0.2s ease all;
`;
const TextContainer = styled.div`
    width:100%;
    display:block;
`;
const LittleText = styled.a`
    font-size: 10px;
    text-align:center;
    color:#0360ad;
    padding: 10px;
`;
const StyledFab = withStyles({
    root: {
       margin : '8px',
    },

})(Fab)
const StyledNavigationIcon = withStyles({
    root: {
       marginRight:'8px',
    },
    
    })(NavigationIcon)


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            whatsapp: '',
            password: '',
            error: '',
            redirect: false,
        };
    }

    /*FUNCTIONS*/

    handleChangeWhatsapp = event => {
        this.setState({ whatsapp: event.target.value });
    };

    handleChangePassword = event => {
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

    render() {
        return (
               <MainContainer>
                   <Title>Login</Title>
                   <Relative>
                        <TextContainer>
                            <TextInput 
                                type="text"
                                value = {this.state.whatsapp}
                                onKeyPress={this.enterPress}
                                onChange = {this.handleChangeWhatsapp}
                                required 
                            /> 
                            <TextLabel>Nome</TextLabel>
                        </TextContainer>
                    </Relative>
                    <Relative>
                        <TextContainer>
                            <TextInput 
                                type="password"
                                value = {this.state.password}
                                onKeyPress={this.enterPress}
                                onChange = {this.handleChangePassword}
                                required 
                            /> 
                            <TextLabel>Senha</TextLabel>
                        </TextContainer>
                    </Relative> 
                    <LastContainer>
                        <LittleText> <Link to="/signup"> Ainda não tem uma conta? Clique aqui!<br/> </Link></LittleText>
                        <StyledFab variant="extended" aria-label="Delete" onClick ={this.login}>
                            <StyledNavigationIcon/>
                            Enter
                        </StyledFab>
                    </LastContainer>
               </MainContainer>
        );
    }
}
