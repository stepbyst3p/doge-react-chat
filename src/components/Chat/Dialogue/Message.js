import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import lightBlue from 'material-ui/colors/lightBlue';
import AvatarPlaceholder from '../../../utils/AvatarPlaceholder'

const messageFromMeWrapperColor = lightBlue[50];

const styles = theme => ({
    message: {
        display: "flex",
        padding: "8px 24px",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    messageFromMe: {
        justifyContent: "flex-end",
    },
    messageFromMeWrapper: {
        flexDirection: "row-reverse",
    },
    messageFromMeContent: {
        background: messageFromMeWrapperColor
    },
    systemMessage: {
        width: "100%",
        textAlign: "center"
    },
    messageWrapper: {
        display: "flex",
        alignItems: "center"
    },
    messageContent: {
        padding: 8,
        maxWidth: "70%",
        minWidth: "10%",
        margin: '0 16px'
    }
})

class Message extends Component {
    render() {
        const { classes, message } = this.props;
        const IsMessageFromMe = message.sender === 'me';
        return (
            <div key="index" className={
                IsMessageFromMe ? classes.messageFromMe + ' ' + classes.message : classes.message}>
                <div className={IsMessageFromMe ? classes.messageWrapper + ' ' + classes.messageFromMeWrapper : classes.messageWrapper}>
                    <Avatar className={classes.avatar}>
                        {AvatarPlaceholder(message.sender)}
                    </Avatar>
                    <Paper className={IsMessageFromMe ? classes.messageFromMeContent + ' ' + classes.messageContent : classes.messageContent}>
                        <Typography variant="caption">
                            {message.sender}
                        </Typography>
                        <Typography variant="body1">
                            {message.content}
                        </Typography>
                        <div className={classes.messageDate}></div>
                    </Paper>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Message);
