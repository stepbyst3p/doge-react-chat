import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List, { ListItem, ListItemText } from "@material-ui/core/List";
import Avatar from "../../Chat/Messages/Avatar";

const styles = theme => ({
    conversationsList: {
        height: `calc(100% - 56px)`,
        overflowY: "scroll"
    }
});

const ConversationList = ({ classes, chats }) => (
    <List className={classes.conversationsList}>
        <h1 />
    </List>
);

export default withStyles(styles)(ConversationList);
