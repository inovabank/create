import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Logout from './Logout';

const Wrapper = styled.div`
    align-self: center;
    width:100%; 
`;

const StyledGrid = withStyles({
    root: {
        alignSelf: 'center',
        width: '100%',
    },
})(Grid)

const StyledTypography = withStyles({
    root: {
        flexGrow:1,
    },
})(Typography)


export default class BarTop extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
          <Wrapper >
            <AppBar position="static" elevation={0}>
                <StyledGrid xs={10}>
                    <Toolbar alignItems={"center"}>
                        <StyledTypography variant="h6">
                        iNovaBank
                        </StyledTypography>
                        <Logout {...this.props}/>
                    </Toolbar>
                </StyledGrid>
            </AppBar>
          </Wrapper>
      );
    }
  }