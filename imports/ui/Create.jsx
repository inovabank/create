import React, { Component } from 'react';
import HomeVideos from "./create/videos/HomeVideos";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

export default class Create extends Component {

    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    /*FUNCTIONS*/
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
            <main>
                <MuiThemeProvider theme={theme} >
                    <CssBaseline />
                    <HomeVideos {...this.props} />
                    <button onClick={this.logout}>Logout</button>
                </MuiThemeProvider>
            </main>
        );
    }
}
