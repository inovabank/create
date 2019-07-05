import React, { Component } from 'react';
import styled from 'styled-components';

const Iframe = styled.iframe`
    width:40vw;
    height:22.5vw;
    border:none;
`; 


export default class Video extends Component {

    constructor(props) {
        super(props);
    }

    /*FUNCTIONS*/

    render() {
        return (
            <main>
                <Iframe 
                src="https://www.youtube.com/embed/vNHSaU8tCbY" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
                </Iframe>
            </main>
        );
    }
}
