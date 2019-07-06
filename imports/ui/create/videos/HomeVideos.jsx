import React, {Component} from 'react';
import VideoIcon from './VideoIcon';
import {allVideos} from '../../../../lib/allVideos';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});
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
            <MuiThemeProvider theme={theme} >
                <CssBaseline />
                {this.state.videosList}
            </MuiThemeProvider>
        );
    }
}
