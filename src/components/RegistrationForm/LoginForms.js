import React from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';

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
    },
    tabContent: {
        padding: theme.spacing.unit * 3
    }
});

class LoginForms extends React.Component {
    state = {
        activeTab: 0,
    };

    handleTabChange = (event, value) => {
        this.setState({ activeTab: value });
    };

    render() {
        const { classes, signup, login, isAuthenticated } = this.props;
        const { activeTab } = this.state;

        if (isAuthenticated) {
            return (
                <Redirect to="/chat" />
            )
        }

        return (
            <div className={classes.root}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            The D0g3st Chat Evah <span role="img" aria-label="doge">🐶</span>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid container justify="center">
                    <Grid item>
                        <div className={classes.formContainer}>
                            <Paper>
                                <AppBar position="static" color="default">
                                    <Tabs value={activeTab} onChange={this.handleTabChange}>
                                        <Tab label="Login" href="#login" className={classes.tab} />
                                        <Tab label="Sign up" href="#sign-up" className={classes.tab} />
                                    </Tabs>
                                </AppBar>
                                <div className={classes.tabContent}>
                                    {activeTab === 0 &&
                                        <SigninForm />}
                                    {activeTab === 1 &&
                                        <SignupForm />
                                    }
                                </div>
                            </Paper>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(LoginForms);
