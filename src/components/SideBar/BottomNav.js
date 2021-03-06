import React from "react";
import BottomNavigation, {
    BottomNavigationAction
} from "@material-ui/core/BottomNavigation";
import RestoreIcon from "@material-ui/icons/Restore";
import ExploreIcon from "@material-ui/icons/Explore";

const BottomNav = () => (
    <BottomNavigation showLabels color="primary">
        <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
    </BottomNavigation>
);

export default BottomNav;
