import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import FingerPrint from "@material-ui/icons/Fingerprint";
import Avatar from '@material-ui/core/Avatar';

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

const LittleText = styled.a`
    font-size: 10px;
    text-align:center;
    color:#0360ad;
    padding: 10px;
`;


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            redirect: false,
        };
    }

    /*FUNCTIONS*/

    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
    };

    handleChangePassword = event => {
        this.setState({ password: event.target.value });
    };

    login = (event) => {
        event.preventDefault();

        console.log('E - submit #form-login');

        Meteor.loginWithPassword(this.state.email, this.state.password, (err) => {
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
            <StyledGrid>
                <StyledPaper>
                    { this.state.error ? <p className="alert alert-danger">{ this.state.error }</p> : '' }
                    <StyledAvatar>
                        <FingerPrint/>
                    </StyledAvatar>
                    <StyledTypography fontSize={30}>
                        Sign up
                    </StyledTypography>
                    <TextField
                        id="email"
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        value = {this.state.email}
                        onKeyPress={this.enterPress}
                        onChange = {this.handleChangeEmail}
                    />

                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        value = {this.state.password}
                        onKeyPress={this.enterPress}
                        onChange = {this.handleChangePassword}
                    />

                    <LittleText> <Link to="/signup"> Ainda não tem uma conta? Clique aqui! </Link></LittleText>
                    <StyledFab variant="extended" aria-label="Delete" onClick ={this.login}>
                        <StyledNavigationIcon/>
                        Enter
                    </StyledFab>
                </StyledPaper>
            </StyledGrid>
        );
    }
}