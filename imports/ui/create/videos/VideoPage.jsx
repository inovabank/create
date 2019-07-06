import React, { Component } from 'react';
import Description from './common/Description';
import Title from './common/Title';
import Video from './common/Video';
import Playlist from './common/Playlist';
import styled from 'styled-components';
import VideoIconPlaylist from "./VideoIconPlaylist";
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});
const Body = styled.body`
    height:100%;
`;
const Main = styled.div`
    padding:5% 20%;
`;
const TitleColumn = styled.div`
    width:67%;
    display:inline-block;
    vertical-align:top;
`;
const FirstColumn = styled.div`
    width: 67%;
    vertical-align:top;
    display:inline-block;
    padding: 0 0 1% 0;
`;
const SecondColumn = styled.div`
    width:33%;
    color:white;
    height:22.5vw;
    display:inline-block;  
    background-color:#212121;
    padding: 0 0 1% 0;
    vertical-align:top;
`;

export default class VideoPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            url: '',
            description: 'Descricao',
            documents: 'Documentos',
            links: 'Links',
            playlist_link: '',
            playlist: '',
        };
    }

    /*FUNCTIONS*/
    componentDidMount() {
        let location = this.props.history.location.pathname;
        let playlist;

        Meteor.call('getVideoData', location, (error, response) => {
            if(error) {
                console.log(error.reason);
            } 
            else {
                playlist = (
                    response.playlist.map((video) => (
                        <VideoIconPlaylist {...{...this.props, ...video}} />
                    ))
                );

                this.setState({
                    id: response.data._id,
                    title: response.data.title,
                    url: response.data.url,
                    description: response.data.description,
                    documents: response.data.documents,
                    links: response.data.links,
                    playlist_link: response.data.playlist_link,
                    playlist: playlist,
                });

            }
        });
    };


    render() {
        return (
            <Body>
                <Main>
                    <MuiThemeProvider theme={theme} >
                        <CssBaseline />
                        <TitleColumn>
                            <Title {...this.state}/>
                        </TitleColumn>
                        <FirstColumn>
                            <Video {...this.state}/>
                        </FirstColumn>
                        <SecondColumn>
                            <Playlist {...this.state}/>
                        </SecondColumn>
                        <Description {...this.state}/>
                    </MuiThemeProvider>
                 </Main>
            </Body>
        );
    }
}
