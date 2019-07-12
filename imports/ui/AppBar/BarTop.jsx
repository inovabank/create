import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Logout from './Logout';
import HomePage from './HomePage';
import MyAccountButton from './MyAccountButton';
import MyVideosButton from './MyVideosButton';

const Wrapper = styled.div`
    align-self: center;
    width:100%;
    height:70px;
    background-color:#606060;
    padding : 10px 30px;
`;
const Right = styled.div`
    float:right;
    display:inline-block;
`;
const Left = styled.div`
    float:left;
    display:inline-block;
`;



export default class BarTop extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Wrapper >
                <Left>
                    <HomePage {...this.props}/>
                </Left>
                <Right>
                    <Logout {...this.props}/>
                </Right>
                <Right>
                    {this.props.redirectToHome === true ? <MyVideosButton {...this.props}/> : <MyAccountButton {...this.props} />}
                </Right>

            </Wrapper>
        );
    }
  }