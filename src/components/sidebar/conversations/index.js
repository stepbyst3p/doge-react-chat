import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import AvatarPlaceholder from '../../../utils/AvatarPlaceholder';

const styles = theme => ({
    conversationsList: {
        height: `calc(100% - 56px)`,
        overflowY: "scroll"
    }
})

const Conversations = ({ classes, chats }) => (
    <List className={classes.conversationsList}>
        {chats.map((chat, index) => (
            <ListItem key={index} button>
                <Avatar>{AvatarPlaceholder(chat.title)}</Avatar>
                <ListItemText primary={chat.title} />
            </ListItem>
        ))}
    </List>
)

export default withStyles(styles)(Conversations);
