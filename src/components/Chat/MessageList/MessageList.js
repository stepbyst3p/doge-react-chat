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

class MessageList extends React.Component {
    scrollDownHistory() {
        const messagesWrapper = this.refs.messagesWrapper;
        if (messagesWrapper) {
            messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
        }
    }

    render() {
        const { classes, messages } = this.props;

        return (
            <div className={classes.messagesWrapper} ref="messagesWrapper">
                {messages && messages.map((message, index) => (
                    <Message key={index} {...message} />
                ))}
            </div>
        );
    }
}


export default withStyles(styles)(MessageList);
