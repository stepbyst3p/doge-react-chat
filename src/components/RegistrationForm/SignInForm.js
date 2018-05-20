import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    formContainer: {
        width: 500,
        marginTop: 88,
    },
    tab: {
        flexGrow: 1
    },
    form: {
        display: "flex",
        flexDirection: "column",
    }
});

const SignUpForm = ({ classes }) => (
    <form noValidate autoComplete="off" className={classes.form}>
        <TextField
            id="username"
            label="Username"
            margin="normal"
        />
        <TextField
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
        />
        <Button variant="raised" color="primary">Login</Button>
    </form>
);

export default withStyles(styles)(SignUpForm);
