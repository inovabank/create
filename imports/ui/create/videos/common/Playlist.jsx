import React, { Component } from 'react';
import VideoIcon from "../VideoIcon";
import styled from 'styled-components';

const PlaylistTitle = styled.div`
        color: white;
        text-align:center;
        font-size:2rem;
        padding:1% 0;
`;

export default class Playlist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playlist: '',
        };
    }


    /*FUNCTIONS*/

    render() {
        return (
            <main>
                <PlaylistTitle>
                    {this.props.playlist_title}
                </PlaylistTitle>
                {this.props.playlist}
            </main>
        );
    }
}
