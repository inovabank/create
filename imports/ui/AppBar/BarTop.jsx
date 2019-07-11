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
<<<<<<< HEAD
=======

const StyledGrid = withStyles({
    root: {
        alignSelf: 'center',
        width: '100%',
    },
})(Grid)

const LogoFirst = styled.img`
    float:left;
    padding:10px 0px;
    height:40px;
    margin-top:10px;
`;

const StyledToolbar = withStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',

    },
})(Toolbar)
>>>>>>> 3a163c8f3426745ac7bd32b87484807b4c84f726

export default class BarTop extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
<<<<<<< HEAD
            <Wrapper >
                <Left>
                    <HomePage {...this.props}/>
                </Left>
                <Right>
                    <MyAccountButton {...this.props} />
                    <Logout {...this.props}/>
                </Right>
            </Wrapper>
=======
          <Wrapper >
            <AppBar color="dark" position="static" elevation={0}>
                <StyledGrid xs={10}>
                    <StyledToolbar alignItems={"center"}>
                        <LogoFirst src="/images/inova_logo.png"/>
                        <div>
                            <MyAccountButton {...this.props} />
                            <Logout {...this.props}/>
                        </div>
                    </StyledToolbar>
                </StyledGrid>
            </AppBar>
          </Wrapper>
>>>>>>> 3a163c8f3426745ac7bd32b87484807b4c84f726
        );
    }
  }