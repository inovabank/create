import React, { Component } from 'react';
import VideoIcon from "../VideoIcon";

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
                {this.props.playlist}
            </main>
        );
    }
}
