import React, {Component} from 'react';
import VideoIcon from './VideoIcon';
import {allVideos} from '../../../../lib/allVideos';

export default class HomeVideos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videosList: '',
        };
    }

    /*FUNCTIONS*/

    componentDidMount = () => {
        let videosList;
        videosList = (
            allVideos.map((video) => (
                <VideoIcon {...{...this.props, ...video}} />
            ))
        );
        this.setState(() => ({
            videosList: videosList,
        }));
    };

    render() {
        return (
            <main>
                {this.state.videosList}
            </main>
        );
    }
}
