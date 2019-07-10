import React, {Component} from 'react';
import VideoIcon from './VideoIcon';
import {allVideos} from '../../../../lib/allVideos';
import {MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Title from "./common/Title";


const Main = styled.div`
    padding:2% 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

const Body = styled.body`
`;

const StyledGrid = styled.div`
    text-align:center;
    display:inline-block;
`;

export default class HomeVideos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videosList: '',
        };
    }

    /*FUNCTIONS*/

    componentDidMount = () => {
        let location = this.props.history.location.pathname.split("/").pop();
        let videosList;
        if(location === '' || location === 'video') {
            videosList = (
                allVideos.map((video) => (
                    <VideoIcon {...{...this.props, ...video}} />
                ))
            );
            this.setState(() => ({
                videosList: videosList,
            }));
        } else {
            let props = this.props;
            let numVideos = 0;

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
                                return (<VideoIcon {...{...props, ...video}} />);
                            }
                        }
                    ));
                    this.setState(() => ({
                        videosList: videosList,
                    }));
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
