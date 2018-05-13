import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Search from './Search';
import Divider from 'material-ui/Divider';
import Conversations from './Conversations';
import BottomNav from './BottomNav'
import NewConversationButton from './Conversations/NewConversationButton';

const styles = theme => ({
    drawerPaper: {
        position: "relative",
        width: 320,
        height: "100%",
    }
})

const SideBar = ({ classes, chats }) => (
    <Drawer
        variant="permanent"
        classes={{
            paper: classes.drawerPaper,
        }}
    >
        <Search />
        <Divider />
        <Conversations chats={chats} />
        <NewConversationButton />
        <BottomNav />
    </Drawer>
)

export default withStyles(styles)(SideBar);
