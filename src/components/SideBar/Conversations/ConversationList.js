import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from '../../Chat/Messages/Avatar';

const styles = theme => ({
    conversationsList: {
        height: `calc(100% - 56px)`,
        overflowY: "scroll"
    }
})

const ConversationList = ({ classes, chats }) => (
    <List className={classes.conversationsList}>
        {chats.map((chat, index) => (
            <ListItem key={index} button>
                <Avatar colorFrom={chat.title}>{chat.title}</Avatar>
                <ListItemText primary={chat.title} />
            </ListItem>
        ))}
    </List>
)

export default withStyles(styles)(ConversationList);
