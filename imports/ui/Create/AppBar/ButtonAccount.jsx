import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DescriptionIcon from '@material-ui/icons/Description';
import Info from '@material-ui/icons/Info';
import Bookmark from '@material-ui/icons/Bookmark';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import MinhaConta from "../../Account/Up/MinhaConta";

const StyledGrid = withStyles({
    root: {
        flexGrow: 1,
        width: '110%',
        justifyContent: 'center',
        backgroundColor:'rgba(0,0,0,0)',
        color: 'black',
        
    },
})(Grid)

const StyledTabs = withStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        color:'black',
        backgroundColor: "#f6f6f6",

    },

})(Tabs)

const StyledTab = withStyles({
    root: {
        fontSize: 12,
        backgroundColor: "rgba(0,0,0,0)",
        color:'black',

    },

})(Tab)

export default class ButtonAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    /*FUNCTIONS*/

    handleChange = (event, newValue) => {
        //this.value = newValue;
        this.setState({value: newValue});
    };

    render() {

        function TabContainer(props) {
            return (
                <Typography variant="h5" component="div" style={{ padding: "15% 30%" }}>
                    {props.children}
                </Typography>
            );
        }

        return (
            <StyledGrid>
                {this.state.value === 0 && <TabContainer>{this.props.MinhaConta}</TabContainer>}
                {this.state.value === 1 && <TabContainer>{this.props.group}</TabContainer>}
                {this.state.value === 2 && <TabContainer>{this.props.boleto}</TabContainer>}
                {this.state.value === 3 && <TabContainer>{this.props.credit}</TabContainer>}
                <AppBar position="static" color="default">
                    <StyledTabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        style = {{color:'black',}}
                        variant="scrollable"
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <StyledTab label = "Minha conta"/>
                        <StyledTab label ="Meu grupo"/>
                        <StyledTab label="Gerar boleto" />
                        <StyledTab label="Pedir crédito"/>
                    </StyledTabs>
                </AppBar>
                {this.state.value === 0 && <TabContainer>CONTAS A PAGAR</TabContainer>}
                {this.state.value === 1 && <TabContainer>PESSOA A<br/> PESSOA B <br/> PESSOA C</TabContainer>}
                {this.state.value === 2 && <TabContainer>BOLETOS</TabContainer>}
                {this.state.value === 3 && <TabContainer>CREDITO</TabContainer>}
            </StyledGrid>
        );
    }
}
