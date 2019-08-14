import React, { Component } from 'react';
import HomeVideos from "./create/videos/HomeVideos";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import BarTop from "./AppBar/BarTop";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#f2f2f2"
    }
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
                    <BarTop {...this.props} />
                    <HomeVideos {...this.props} />
                </MuiThemeProvider>
            </main>
        );
    }
}
