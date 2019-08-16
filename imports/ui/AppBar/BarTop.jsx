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
import Divider from '@material-ui/core/Divider';

const Wrapper = styled.div`
    align-self: center;
    width:100%;
    height:59px;
    background-color:#f2f2f2;  
    padding : 11px 50px;
`;

const Right = styled.div`
    font-family:'Bahnschrift';
    float:right;
    padding : 0px;
    margin-top: 0;
    display:inline-block;
`;

const Left = styled.div`
    float:left;
    display:inline-block;
    margin-left:0px
`;

export default class BarTop extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Wrapper >
                <div className="container  d-flex justify-content-center" style={{ justifyContent: 'center'}}>
                    <Left>
                        <HomePage {...this.props}/>
                    </Left>
                <Right>
                    <Logout {...this.props}/>
                </Right>
                <br/><br/><br/><br/>
                <Divider component="li"/>
                </div>
            </Wrapper>
        );
    }
  }