import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    textFieldWrapper: {
        left: "auto",
        right: 0,
        width: `calc(100% - 320px)`,
        bottom: 0,
        boxSizing: "border-box",
        padding: 24,
        position: "fixed"
    },
    textFieldPaper: {
        padding: 16
    },
    textField: {
        width: "100%"
    }
})

const MessageInput = ({ classes }) => (
    <div className={classes.textFieldWrapper}>
        <Paper className={classes.textFieldPaper}>
            <TextField id="time" type="textarea" className={classes.textField} placeholder="Type your message..." />
        </Paper>
    </div>
)

export default withStyles(styles)(MessageInput)
