import React from 'react';
import { withStyles } from 'material-ui/styles';
import Message from './Message';

const styles = theme => ({
    messages: {
        width: "100%",
        height: "100%",
        overflowX: "scroll",
        paddingTop: "24px",
        paddingBottom: "120px"
    }
})

const Dialogue = ({ classes, messages }) => (
    <div className={classes.messages}>
        {messages.map((message, index) => (
            <Message message={message} key={index} />
        ))}
    </div>
)

export default withStyles(styles)(Dialogue);
