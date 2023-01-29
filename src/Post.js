import { ChatBubbleOutlineRounded, Favorite, Publish, Repeat, VerifiedUserOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";

import "./Post.css"
function Post({ displayName, username, verified,text,image,avatar,timestamp }) {

  
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar src= {avatar} />

      </div>
      <div className="post__body">
        <div className="post__header">
            <div  className="post__headertext">

            <h3>{displayName} <span className="post__headerspecial"> {verified && <VerifiedUserOutlined className="post__badge"/>} {username} </span> </h3>
            </div>

        </div>
        <div className="post__headerdescription">
            <p>{text}</p>
        </div>
        <img src={image}/>
        
        <div className="post__footer">
            <ChatBubbleOutlineRounded fontSize="small"/>
            <Repeat fontSize="small"/>
            <Favorite fontSize="small"/>
            <Publish fontSize="small"/>
        </div>
      </div>
    
    </div>
  );
}

export default Post;
