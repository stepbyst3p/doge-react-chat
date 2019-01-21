import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Search from "./Search";
import Divider from "@material-ui/core/Divider";
import ConversationList from "./Conversations/ConversationList";
import BottomNav from "./BottomNav";
import NewConversationButton from "./Conversations/NewConversationButton";

const styles = theme => ({
    drawerPaper: {
        position: "relative",
        width: 320,
        height: "100%"
    }
});

const SideBar = ({ classes, chats }) => (
    <Drawer
        variant="permanent"
        classes={{
            paper: classes.drawerPaper
        }}
    >
        <Search />
        <Divider />
        <ConversationList chats={chats} />
        <NewConversationButton />
        <BottomNav />
    </Drawer>
);

export default withStyles(styles)(SideBar);
