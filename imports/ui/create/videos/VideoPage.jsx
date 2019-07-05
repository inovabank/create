import React, { Component } from 'react';
import Description from './common/Description';
import Title from './common/Title';
import Video from './common/Video';
import Playlist from './common/Playlist';

export default class VideoPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            url: '',
            description: '',
            documents: '',
            links: '',
            playlist_link: '',
        };
    }

    /*FUNCTIONS*/
    componentDidMount() {
        let location = this.props.history.location.pathname;

        Meteor.call('getVideoData', location, (error, response) => {
            if(error) {
                console.log(error.reason);
            } else {
                this.setState({
                    title: response.title,
                    url: response.url,
                    description: response.description,
                    documents: response.documents,
                    links: response.links,
                    playlist_link: response.playlist_link,
                });
            }
        });

    }

    render() {
        return (
            <main>
                <Title />
                <Video />
                <Playlist />
                <Description {...this.state}/>
            </main>
        );
    }
}
