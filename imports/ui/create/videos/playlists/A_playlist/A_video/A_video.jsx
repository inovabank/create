import React, { Component } from 'react';
import Description from '../../../common/Description';
import Title from '../../../common/Title';
import Video from '../../../common/Video';
import Playlist from '../../../common/Playlist';

export default class A_video extends Component {

    constructor(props) {
        super(props);
        this.Description = {
            description: 'Descrição',
            documents: 'Documentos',
            links: 'Links',
        };
    }

    /*FUNCTIONS*/

    render() {
        return (
            <main>
                <Title />
                <Video />
                <Playlist />
                <Description {...this.Description}/>
            </main>
        );
    }
}