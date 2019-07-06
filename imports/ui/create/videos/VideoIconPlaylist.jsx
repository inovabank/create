import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import {Redirect} from "react-router";

const StyledButton = withStyles({
    root: {
        marginTop: '0',
        fontSize: 12,
        color: 'white',
        borderRadius:'0',
        padding: '1% 3%'

    },
})(Button)

const sel={
    backgroundColor:'#121212',
    fontWeight:'bold',
    textAlign:'left',
};
const notsel={
    backgroundColor:'#212121',
    textAlign:'left',
};


const Wrapper = styled.div`
    overflow-y: auto;
`;

export default class VideoIcon extends Component {

    constructor(props) {
        super(props);

        this.startVideo = this.startVideo.bind(this);
        this.state = {
            id: '',
        }
    }

    /*FUNCTIONS*/
    componentDidMount = () => {
        Meteor.call('videoRoom', this.props.url, (error, response) => {
            if(error) {
                console.log(error.reason);
            } else {
                this.setState({id: response.videoId});
            }
        });
    };

    startVideo(e) {
        e.preventDefault();
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
                {this.state.id === this.props.history.location.pathname.split("/").pop() ? window.location.reload() : ''}
            }
        });
    }


    render() {
        return (
            <main>
                <Wrapper>
                    <StyledButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        style={this.state.id === this.props.history.location.pathname.split("/").pop() ? sel : notsel}
                        onClick={this.startVideo.bind(this)}
                    >
                        {this.props.title}
                    </StyledButton>
                </Wrapper>
            </main>
        );
    }
}
