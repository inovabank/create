import React, { Component } from 'react';
import Title from "./create/videos/common/Title";
import {createMuiTheme, withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {MuiThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});


const StyledGrid = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
})(Grid)

const StyledCard = withStyles({
    root: {
        width: 200,
        marginTop: 16,
        marginLeft: 32,
        marginRight: 32,
    },
})(Card)

const StyledCardContent = withStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
})(CardContent)

const Main = styled.div`
    padding:5% 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default class MenuPage extends Component {

    constructor(props) {
        super(props);

        this.redirectToCreate = this.redirectToCreate.bind(this);
        this.redirectToInformation = this.redirectToInformation.bind(this);
        this.logout = this.logout.bind(this);
    }

    /*FUNCTIONS*/

    redirectToCreate = () => {
        this.props.history.push('/video');
    };

    redirectToInformation = () => {
        this.props.history.push('/information');
    };

    logout(e){
        e.preventDefault();
        Meteor.logout( (err) => {
            if (err) {
                console.log( err.reason );
            } else {
                this.props.history.push('/');
            }
        });
    };

    render() {
        return (
            <Main>
                <MuiThemeProvider theme={theme} >
                    <CssBaseline />
                    <Title title={"Bem vindo!"} />
                <StyledGrid>
                    <StyledCard>
                        <CardActionArea onClick={this.redirectToInformation}>
                            <StyledCardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    ACESSE SUA CONTA
                                </Typography>
                            </StyledCardContent>
                        </CardActionArea>
                    </StyledCard>
                    <StyledCard>
                        <CardActionArea onClick={this.redirectToCreate}>
                            <StyledCardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    CREATE
                                </Typography>
                            </StyledCardContent>
                        </CardActionArea>
                    </StyledCard>
                </StyledGrid>
                </MuiThemeProvider>
            </Main>
        );
    }
}
