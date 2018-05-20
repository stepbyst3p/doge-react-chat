import React from 'react';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    searchWrapper: {
        padding: "16px 24px",
        boxSizing: "border-box",
        width: "100%"
    },
    searchInput: {
        width: "100%"
    }
})

const Search = ({ classes }) => (
    <div className={classes.searchWrapper}>
        <Input
            placeholder="Search chats"
            inputProps={{
                'aria-label': 'Description',
            }}
            className={classes.searchInput}
        />
    </div>
)

export default withStyles(styles)(Search);
