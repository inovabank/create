import { Meteor } from 'meteor/meteor';
import React, {Component} from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default class MyVideoButton extends Component {
    constructor(props){
        super(props);
        this.video = this.video.bind(this);
    }

    /*FUNCTIONS*/

    video(e){
        e.preventDefault();
        this.props.history.push('/video');
    };

    render() {
        return (
            <Button size="large" color="inherit" onClick ={this.video}><Typography gutterBottom variant="h5" component="h2">Meus videos</Typography></Button>
        );
    }
}
