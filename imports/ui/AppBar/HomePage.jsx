import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const StyledButton = withStyles({
    root: {
        justifyContent: 'flex-start',
    },
})(Button)

export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.homepage = this.homepage.bind(this);
    }

    /*FUNCTIONS*/

    homepage(e){
        e.preventDefault();
        this.props.history.push('/video');
    };

    render() {
        return (
            <StyledButton variant="h5" color="inherit" onClick ={this.homepage}><Typography gutterBottom variant="h5" component="h2">iNovaBank</Typography></StyledButton>
        );
    }
}