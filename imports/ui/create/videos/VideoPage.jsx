import React, { Component } from 'react';
import Description from './common/Description';
import Title from './common/Title';
import Video from './common/Video';
import Playlist from './common/Playlist';
import Picture from './common/Picture'
import styled from 'styled-components';
import VideoIconPlaylist from "./VideoIconPlaylist";
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import HomeVideos from "./HomeVideos";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});
const Main = styled.div`
    padding:5% 20%;
    @media screen and (max-width:1100px)
    {
        padding: 5% 5%;
    }
`;
const TitleColumn = styled.div`
    width:67%;
    display:inline-block;
`;
const PictureColumn = styled.div`
    width:33%;
    display:inline-block;
`;
const FirstColumn = styled.div`
    vertical-align:top;
    width:67%;
    display:inline-block;
    padding: 0 0 1% 0;
    @media screen and (max-width:1100px){
        display:block;
        width:100%;
    }
`;
const SecondColumn = styled.div`
    width:32%;
    color:white;
    height:22.5vw;
    display:inline-block;  
    background-color:#212121;
    margin-left:5px;
    padding: 0 0 1% 0;
    vertical-align:top;
    @media screen and (max-width:1100px){
        width:32%;
    }
    @media screen and (max-width:767px){
        margin-top:5px;
        margin-left:0px;
        width:100%
    }
`;
const DescriptionArea = styled.div`
    width:100%;
    @media screen and (max-width:1100px){
        width:67%;
        display:inline-block;
    }
    @media screen and (max-width:767px){
        width:100%
    }
`;
const show = {
    display: 'inline-block',
}
const hide = {
    display: 'none',
}

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
            width: 0, 
            height: 0
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    /*FUNCTIONS*/
    componentDidMount() {
        let location = this.props.history.location.pathname;
        let playlist;
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

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
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }


    render() {
        return (
                <Main>
                    <MuiThemeProvider theme={theme} >
                        <CssBaseline />
                        <TitleColumn>
                            <Title {...this.state}/>
                        </TitleColumn>
                        <PictureColumn>
                            <Picture />
                        </PictureColumn>
                        <FirstColumn>
                            <Video {...this.state}/>
                        </FirstColumn>
                        <SecondColumn style={this.state.width>1100 ? show:hide} >
                            <Playlist {...this.state}/>
                        </SecondColumn>
                        <DescriptionArea>
                            <Description {...this.state}/>
                        </DescriptionArea>
                        <SecondColumn style={this.state.width>1100 ? hide:show} >
                            <Playlist {...this.state}/>
                        </SecondColumn>
                        <HomeVideos {...{...this.props, ...this.state}}/>
                    </MuiThemeProvider>
                 </Main>
        );
    }
}
