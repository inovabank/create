import React, { Component } from 'react';
import Description from './common/Description';
import Title from './common/Title';
import Video from './common/Video';
import Playlist from './common/Playlist';
import styled from 'styled-components';

const Main = styled.div`
    padding:5% 20%;
`;

const FirstColumn = styled.div`
    width: 67%;
    vertical-align:top;
    display:inline-block;
    padding: 0 0 1% 0;
`;
const SecondColumn = styled.div`
    background-color:black;
    width:33%;
    color:white;
    height:22.5vw;
    display:inline-block;  
    padding: 0 0 1% 0;
    vertical-align:top;
`;

export default class VideoPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            url: '',
            description: 'Descricao',
            documents: 'Documentos',
            links: 'L   inks',
            playlist_link: '',
        },
        this.Title = {
            title: 'Cursos de (...)',
        }
    }

    /*FUNCTIONS*/
    /*componentDidMount() {
        let location = this.props.history.location.pathname;

        Meteor.call('getVideoData', location, (error, response) => {
            if(error) {
                console.log(error.reason);
            } 
            else {
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

    }*/

    render() {
        return (
            <Main>
                <Title />
                <FirstColumn>
                    <Video />
                </FirstColumn>
                <SecondColumn>
                    <Playlist />
                </SecondColumn>
                <Description {...this.state}/>
            </Main>
        );
    }
}
