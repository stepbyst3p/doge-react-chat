import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    floatedBottomButton: {
        left: "auto",
        right: 24,
        bottom: 72,
        position: "absolute"
    }
})

const NewConversationButton = ({ classes }) => (
    <Button variant="fab" color="primary" className={classes.floatedBottomButton} >
        <AddIcon />
    </Button>
)

export default withStyles(styles)(NewConversationButton);
