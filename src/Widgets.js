import { Search } from "@mui/icons-material";
import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

import "./Widgets.css";
function Widgets() {
  return (
    <div className="widgets">
      <div className="widget__inputs">
        <Search className="widgets__search" />
        <input placeholder="Search..." type="text" />
      </div>
      <div className="widgets__container">
        <h2>Whats Happening</h2>
        <TwitterTweetEmbed tweetId={"1618858873414385667"} />
      </div>
    </div>
  );
}

export default Widgets;
