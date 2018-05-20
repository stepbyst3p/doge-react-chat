import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import RegistrationForm from './RegistrationForm';
import SignUpForm from './SignUpForm';

const styles = theme => ({
    root: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.background.default,
        justifyContent: "center"
    },
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

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

class LoginForms extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <div className={classes.formContainer}>
                    <Paper>
                        <AppBar position="static" color="default">
                            <Tabs value={value} onChange={this.handleChange} fullwidth>
                                <Tab label="Login" href="#login" className={classes.tab} />
                                <Tab label="Sign up" href="#sign-up" className={classes.tab} />
                            </Tabs>
                        </AppBar>
                        {value === 0 &&
                            <TabContainer>
                                <RegistrationForm />
                            </TabContainer>}
                        {value === 1 &&
                            <TabContainer>
                                <SignUpForm />
                            </TabContainer>}
                    </Paper>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(LoginForms);
