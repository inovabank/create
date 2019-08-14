import { Meteor } from 'meteor/meteor';
import React, {Component} from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 16px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#002747',
    borderColor: '#002747',
    fontFamily: [
      'Bahnschrift',
    ].join(','),
    '&:hover': {
      backgroundColor: '#081326',
      borderColor: '#081326',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#081326',
      borderColor: '#081326',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const Logout1 = styled.button`
    font-weight: bold;
    padding: 10px 35px;
    font-size:1.5rem;
    border:none;
    background-color:#081326;
    margin-right:10px;
`;

export default class Logout extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(e){
        e.preventDefault();
        Meteor.logout( (err) => {
            if (err) {
                console.log( err.reason );
            } else {
                this.props.history.push('/');
            }
        });
    };

    render() {
        return (
            <BootstrapButton variant="contained" color="primary" onClick ={this.logout}>Logout</BootstrapButton>
        );
    }

}