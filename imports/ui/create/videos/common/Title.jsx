import React, { Component } from 'react';
import styled from 'styled-components'

const MainTitle = styled.div`
    font-size:4rem;
    padding:0 4%
`;


export default class Title extends Component {

    constructor(props) {
        super(props);
    }

    /*FUNCTIONS*/

    render() {
        return (
            <MainTitle>
                {this.props.title}
            </MainTitle>
        );
    }
}
