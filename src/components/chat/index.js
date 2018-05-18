import React from "react";
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { withStyles } from "material-ui";

const styles = theme => ({
    main: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItemas: "center",
        paddingTop: 64,
        justifyContent: "center"
    }
})

const Chat = ({ classes, messages }) => (
    <main className={classes.main}>
        <MessageList messages={messages} />
        <MessageInput />
    </main>
)

export default withStyles(styles)(Chat);
