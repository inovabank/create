import React, { Component } from 'react';
import styled from 'styled-components'

const MainTitle = styled.div`
    font-size:3rem;
    padding:0 4%
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
