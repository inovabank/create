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

const LittleText = styled.a`
    font-size: 10px;
    text-align:center;
    color:#0360ad;
    padding: 10px;
`;


export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
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

    handleChangeFirstName = event => {
        this.setState({ firstName: event.target.value });
    };

    handleChangeLastName = event => {
        this.setState({ lastName: event.target.value });
    };
    handleChangeCPF = event => {
        this.setState({ CPF: event.target.value });
    };

    createAccount = () => {
        console.log('E - submit #form-signup');

        let newUserData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            CPF: this.state.CPF,
            whatsapp: this.state.whatsapp,
            password: this.state.password,
        };

        if (newUserData.whatsapp !== '' && newUserData.password !== '' && newUserData.CPF !== '' && newUserData.firstName !== '' && newUserData.lastName !== '') {
            console.log(newUserData);
            Accounts.createUser(newUserData);
            Meteor.call('insertUser', newUserData, (error) => {
                if (error) {
                    console.log(error);
                    this.setState({ error: error.reason });
                } else {
                    Meteor.call('insertProfile', newUserData);
                    this.state.accountCreated = true;
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

    loginRoute = () => {
        if (Meteor.userId())  {
            Meteor.userId() ? this.props.history.push('/signup-subjects') : '';
        }
    };

    render() {

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                    { this.state.error ? <p className="alert alert-danger">{ this.state.error }</p> : '' }
                    <StyledAvatar>
                        <LockOutlinedIcon />
                    </StyledAvatar>
                    <StyledTypography component="h1" variant="h5">
                        Sign up
                    </StyledTypography>
                        <form>
                            <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    value = {this.state.firstName}
                                    onChange = {this.handleChangeFirstName}
                                    onKeyPress={this.enterPress}
                                />

                            </Grid>
                            <Grid item xs = {12} sm={6}>
                                <TextField
                                    autoComplete="lname"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    value = {this.state.lastName}
                                    onChange = {this.handleChangeLastName}
                                    onKeyPress={this.enterPress}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="whatsapp"
                                    label="Whatsapp"
                                    name="whatsapp"
                                    autoComplete="whatsapp"
                                    value = {this.state.whatsapp}
                                    onChange = {this.handleChangeWhatsapp}
                                    onKeyPress={this.enterPress}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value = {this.state.password}
                                    onChange = {this.handleChangePassword}
                                    onKeyPress={this.enterPress}
                                />
                            </Grid>

                        </Grid>
                        <StyledButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.createAccount}
                        >
                            Sign Up
                        </StyledButton>
                    </form>
                    {this.loginRoute()}
                <Box mt={5}>
                    <Typography variant="body2" color="textSecondary" align="center">
                        <Link to="/"> Volte para o login! </Link>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="center">

                        {'iNovaBank'}
                        
                        {' team.'}
                    </Typography>
                </Box>


            </Container>


        );
    }
}





  