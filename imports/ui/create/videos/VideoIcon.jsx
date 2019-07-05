import React, { Component } from 'react';
import Title from './common/Title';

export default class VideoIcon extends Component {

    constructor(props) {
        super(props);

        this.startVideo = this.startVideo.bind(this);
    }

    /*FUNCTIONS*/

    startVideo() {

        Meteor.call('videoRoom', this.props.url, (error, response) => {
            if(error) {
                console.log(error.reason);
            } else {
                let location = this.props.history.location.pathname;

                if( location === '/video' ){
                    this.props.history.push(`${this.props.history.location.pathname + '/' + response.videoId }`);
                }
                else {
                    this.props.history.push(`${ response.videoId }`);
                }
            }
        });
    }


    render() {
        return (
            <main>
                <button onClick={this.startVideo}>
                    <Title/>
                </button>
            </main>
        );
    }
}
