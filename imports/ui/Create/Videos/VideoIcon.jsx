import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import {Redirect} from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const StyledCard = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxHeight: 250,
        width: 345,
        marginTop: 8,
        marginLeft: 8,
    },
})(Card)

const Wrapper = styled.div`
    overflow-y: auto;
    display: flex;
`;
const Main = styled.div`
    display:inline-block;
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
            <Main>
                <Wrapper>
                    <StyledCard>
                        <CardActionArea onClick={this.startVideo.bind(this)}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={this.props.video_thumb}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {this.props.title}
                                </Typography>
                                <Typography variant="h6" color="textSecondary" component="p">
                                    {this.props.author_name}
                                </Typography>

                            </CardContent>
                        </CardActionArea>
                    </StyledCard>
                </Wrapper>
            </Main>
        );
    }
}
