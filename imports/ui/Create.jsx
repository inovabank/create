import React, { Component } from 'react';
import HomeVideos from "./create/videos/HomeVideos";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import BarTopVideo from "./AppBar/BarTopVideo";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    }
});

export default class Create extends Component {

    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
        this.redirectToAccount = this.redirectToAccount.bind(this);
    }

    /*FUNCTIONS*/

    redirectToAccount = () => {
        this.props.history.push('/account')
    }
    
    logout(e){
        e.preventDefault();
        Meteor.logout( (err) => {
            if (err) {
                console.log( err.reason );
            } else {
                this.props.history.push('/login');
            }
        });
    };

    render() {
        return (
            <main>
                <MuiThemeProvider theme={theme} >
                    <CssBaseline />
                    <BarTopVideo {...this.props} />
                    <HomeVideos {...this.props} />
                </MuiThemeProvider>
            </main>
        );
    }
}
