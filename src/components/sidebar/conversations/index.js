import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import { chats } from '../../../mock-data';

const styles = theme => ({
    conversationsList: {
        height: `calc(100% - 56px)`,
        overflowY: "scroll"
    }
})

const Conversations = ({ classes }) => (
    <List className={classes.conversationsList}>
        {chats.map((chat, index) => (
            <ListItem key={index} button>
                <Avatar>{chat.title && chat.title[0]}</Avatar>
                <ListItemText primary={chat.title} />
            </ListItem>
        ))}
    </List>
)

export default withStyles(styles)(Conversations);
