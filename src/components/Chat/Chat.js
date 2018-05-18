import React from "react";
import Messages from './Messages';
import MessageInput from './MessageInput';
import { withStyles } from "material-ui";

const styles = theme => ({
    main: {
    }
})

const Chat = ({ classes, messages }) => (
    <main className={classes.main}>
        <Messages messages={messages} />
        <MessageInput />
    </main>
)

export default withStyles(styles)(Chat);
