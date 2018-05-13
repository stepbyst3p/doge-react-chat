import React, { Component } from "react";
import { withStyles } from 'material-ui/styles';
import Chat from "./components/Chat";
import SideBar from "./components/SideBar";
import ChatHeader from "./components/ChatHeader";


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
                <SideBar />
                <Chat />
            </div>
        );
    }
}

export default withStyles(styles)(App);
