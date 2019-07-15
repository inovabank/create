import React, { Component } from 'react';
import styled from 'styled-components'
import {Typography, withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const MainTitle = styled.div`
    font-size:3rem;
`;
const DescriptionTitle = styled.div`
    color:gray;
    padding: 0 4% 1% 4%;
    font-size:1.8rem;
`;

export default class Title extends Component {

    constructor(props) {
        super(props);
    }

    /*FUNCTIONS*/

    render() {
        return (
            <main>
                <Typography variant="h6">
                    {this.props.current_video === '' ? '' : this.props.current_video + " de " + this.props.num_videos}
                </Typography>
                <MainTitle>
                    {this.props.title}
                </MainTitle>
                <DescriptionTitle>
                    {this.props.description}
                </DescriptionTitle>
            </main>
        );
    }
}
