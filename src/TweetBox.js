import { Avatar, Button } from "@mui/material";
import React from "react";
import "./TweetBox.css";
import user from "../src/Assets/user.png";
import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    const docRef = addDoc(collection(db, "posts"), {
      displayName: "zuccDaddy",
      username: "Zucc",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/twitter-clone-684b2.appspot.com/o/img%2Fuser.png?alt=media&token=97dbda36-9f14-4536-ad17-dff298ec4e0f",
    });

    setTweetImage("");
    setTweetMessage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetboxInput">
          <Avatar src={user} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="Whats Happening"
            type="text"
          />
        </div>
        <input
          placeholder="Enter Image URL"
          className="tweetboxImageInput"
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          type="text"
        />
        <Button onClick={sendTweet} type="submit" className="tweetbox_button">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
