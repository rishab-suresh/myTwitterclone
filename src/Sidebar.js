import React from "react";
import {
  Bookmark,
  Home,
  ListAlt,
  MailOutline,
  MoreHoriz,
  Notifications,
  PermIdentity,
  Search,
  Twitter,
} from "@mui/icons-material";
import SidebarOptions from "./SidebarOptions";
import { Button } from "@mui/material";
import "./Sidebar.css";
function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Twitter className="sidebar__twitterIcon"/>

        <SidebarOptions active Icon={Home} text="Home" />
        <SidebarOptions Icon={Search} text="Home" />
        <SidebarOptions Icon={Notifications} text="Notification" />
        <SidebarOptions Icon={MailOutline} text="Messages" />
        <SidebarOptions Icon={Bookmark} text="Bookmarks" />
        <SidebarOptions Icon={ListAlt} text="List" />
        <SidebarOptions Icon={PermIdentity} text="Profile" />
        <SidebarOptions Icon={MoreHoriz} text="More" />


        <Button variant="outlined" className="tweet" fullWidth>
        Tweet
      </Button>
      </div>

     
    </>
  );
}

export default Sidebar;
