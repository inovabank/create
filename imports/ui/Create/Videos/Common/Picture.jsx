import React, { Component } from 'react';
import styled from 'styled-components';
import CardMedia from '@material-ui/core/CardMedia';

const MainPicture = styled.div`
    text-align:center;
`;
const Name = styled.div`
    text-align:center;
    color:gray;
    padding: 1% 0
    font-size:1.8rem;
`;

export default class Picture extends Component {

    constructor(props) {
        super(props);
    }

    /*FUNCTIONS*/

    render() {
        return (
            <main>
                <MainPicture>
                <CardMedia
                                outline="false"
                                component="img"
                                height="140"
                                image={this.props.author_thumb}
                            />
                </MainPicture>
                <Name>
                    {this.props.author_name}
                </Name>
            </main>
        );
    }
}
