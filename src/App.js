import React, { Component } from 'react';
import Memberlist from './components/memberList';
import { hot } from 'react-hot-loader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    render() {
        return (
             <MuiThemeProvider>
                <Memberlist />
            </MuiThemeProvider>
        );
    }
}

export default hot(module)(App);