import { Meteor } from 'meteor/meteor';
import React, {Component} from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const MyVideos = styled.button`
    font-weight: bold;
    padding: 15px 5px;
    float:right;
    font-size:1.5rem;
    border:none;
    background-color:inherit;
`;

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
                <MyVideos size="large" color="inherit" onClick ={this.video}>Meus Vídeos</MyVideos>
        );
    }
}
