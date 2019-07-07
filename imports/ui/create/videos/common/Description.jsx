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


const StyledGrid = withStyles({
    root: {
        flexGrow: 1,
        width: '100%',
        justifyContent: 'center',
        backgroundColor:'#212121',
        
    },
})(Grid)

const StyledTabs = withStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        color:'white',

    },

})(Tabs)

const StyledTab = withStyles({
    root: {
        fontSize: 12,
        color:'white',
    },

})(Tab)

export default class Description extends Component {

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
                <Typography variant="h5" component="div" style={{ padding: "5% 5%" }}>
                    {props.children}
                </Typography>
            );
        }

        return (
            <StyledGrid>
                <AppBar position="static" color="default">
                    <StyledTabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        style = {{color:'white',}}
                        variant="scrollable"
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <StyledTab label="Descrição"/>
                        <StyledTab label="Documentos Usados" />
                        <StyledTab label="Links úteis"/>
                    </StyledTabs>
                </AppBar>
                {this.state.value === 0 && <TabContainer>{this.props.description}</TabContainer>}
                {this.state.value === 1 && <TabContainer>{this.props.documents}</TabContainer>}
                {this.state.value === 2 && <TabContainer>{this.props.links}</TabContainer>}
            </StyledGrid>
        );
    }
}
