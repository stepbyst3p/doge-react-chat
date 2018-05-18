import React from 'react';
import { withStyles } from 'material-ui/styles';
import Message from './Message';

const styles = theme => ({
    messagesWrapper: {
        width: "100%",
        height: "100%",
        overflow: "scroll",
        paddingTop: "24px",
        paddingBottom: "120px"
    }
})

// TODO Сделать Pure Component 
class MessageList extends React.Component {
    componentDidMount() {
        this.scrollDownHistory();
    }
    componentDidUpdate() {
        this.scrollDownHistory();
    }
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
