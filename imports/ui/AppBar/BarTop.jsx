import React from 'react'
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
`;

const StyledGrid = withStyles({
    root: {
        alignSelf: 'center',
        width: '100%',
    },
})(Grid)

const StyledToolbar = withStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',

    },
})(Toolbar)

export default class BarTop extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
          <Wrapper >
            <AppBar color="dark" position="static" elevation={0}>
                <StyledGrid xs={10}>
                    <StyledToolbar alignItems={"center"}>
                        <HomePage {...this.props}/>
                        <div>
                            <MyAccountButton {...this.props} />
                            <Logout {...this.props}/>
                        </div>
                    </StyledToolbar>
                </StyledGrid>
            </AppBar>
          </Wrapper>
        );
    }
  }