import React, { Component } from 'react';
import styled from 'styled-components';

const Iframe = styled.iframe`
    width:100%;
    height:28vw;
    border:none;
    @media screen and (max-width:1100px){
        height:50.625vw;
    } 
`; 


export default class Video extends Component {

    constructor(props) {
        super(props);
        this.state = {
            video: '',
        }
    }

    /*FUNCTIONS*/

    render() {
        return (
            <main>
                <Iframe
                src={this.props.url}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
                </Iframe>
            </main>
        );
    }
}
