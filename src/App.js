import React, { Component } from "react";
import { withStyles } from 'material-ui/styles';
import Chat from "./components/Chat";
import SideBar from "./components/SideBar";
import ChatHeader from "./components/ChatHeader";

import { chats, messages } from './mock-data';

const styles = theme => ({
    root: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.background.default,
    }
})
class App extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <ChatHeader />
                <SideBar chats={chats} />
                <Chat messages={messages} />
            </div>
        );
    }
}

export default withStyles(styles)(App);
