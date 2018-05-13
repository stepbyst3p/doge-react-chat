import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import { messages } from '../../../mock-data';
import Typography from 'material-ui/Typography';
import blue from 'material-ui/colors/blue';

const messageFromMeColor = blue[50];

const styles = theme => ({
    sideBar: {
        width: 320,
    },
    main: {
        width: "100%",
        height: "100%",
        display: "flex",
        overflow: "hidden",
        alignItems: "center",
        paddingTop: "64px",
        justifyContent: "center"
    },
    messages: {
        width: "100%",
        height: "100%",
        overflowX: "scroll",
        paddingTop: "24px",
        paddingBottom: "120px"
    },
    message: {
        display: "flex",
        padding: "8px 24px",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    messageFromMe: {
        justifyContent: "flex-end",
        messageContent: {
            backgroundColor: messageFromMeColor
        }
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
        marginLeft: 16
    }
})

const Dialogue = ({ classes }) => (
    <div className={classes.messages}>
        {messages.map((message, index) => (
            <div className={
                message.sender === "me" ? classes.messageFromMe + ' ' + classes.message : classes.message}>
                <div className={classes.messageWrapper}>
                    <Avatar className={classes.avatar}>{message.sender[0].toUpperCase()}</Avatar>
                    <Paper className={classes.messageContent}>
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
        ))}
    </div>
)

export default withStyles(styles)(Dialogue);
