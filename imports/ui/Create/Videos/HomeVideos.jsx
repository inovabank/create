import React, {Component} from 'react';
import VideoIcon from './VideoIcon';
import {allVideos} from '../../../../lib/allVideos';
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Title from "./Common/Title";

const Main = styled.div`
    padding:2% 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

const VideoLine = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledGrid = withStyles({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
})(Grid)

export default class HomeVideos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videosList: '',
        };
    }

    /*FUNCTIONS*/

    videosListsMaker = (videosList) => {
        const videosPerLine = 3;
        let videosLists = [];
        let videoLine = [];
        for(let i = 0;  i < videosList.length/videosPerLine; i++){
            for(let l=0; l < videosPerLine && l+i < videosList.length; l++) {
                videoLine = videoLine.concat(videosList[i+l]);
            }
            videosLists = videosLists.concat(
                <VideoLine>
                    {videoLine}
                </VideoLine>
            );
            videoLine = [];
        }
        console.log(videosList);
        this.setState(() => ({
            videosList: videosLists,
        }));
    };

    componentDidMount = () => {
        let location = this.props.history.location.pathname.split("/").pop();
        let videosList;
        let numVideos = 0;
        let props = this.props;
        if(location === '' || location === 'video') {
            videosList = (
                allVideos.map(function (video) {
                    if(numVideos < 12) {
                        numVideos = numVideos + 1;
                        return (<VideoIcon {...{...props, ...video}} />);
                    }
                }
            ));
            this.videosListsMaker(videosList);
        } else {
            Meteor.call('getVideoData', location, (error, response) => {
                if(error) {
                    console.log(error.reason);
                }
                else {
                    videosList = (
                        allVideos.map(function (video) {
                            console.log(response.data.url !== video.url);
                            console.log(video.url);
                            if(response.data.url !== video.url && numVideos < 12) {
                                numVideos = numVideos + 1;
                                return (<VideoIcon {...{...props, ...video}} />);
                            }
                        }
                    ));
                    this.videosListsMaker(videosList);
                }
            });
        }
    };

    render() {
        return (
            <Main>
                <Title title={"Aprenda com quem faz!"} />
                <StyledGrid>
                    {this.state.videosList}
                </StyledGrid>
            </Main>
        );
    }
}
