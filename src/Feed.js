import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);
  async function getPosts(db) {
    const tweets_list = collection(db, "posts");
    const snapshot = await getDocs(tweets_list);
    const tweets = snapshot.docs.map((doc) => doc.data());
    setPosts(tweets);
  }

  useEffect(() => {
    getPosts(db);
  }, []);

  return (
    <div className="Feed">
      <div className="Feed_header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          image={post.image}
          avatar={post.avatar}
        />
      ))}
    </div>
  );
}

export default Feed;
