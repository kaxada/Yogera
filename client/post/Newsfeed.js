import { Card, Divider, Typography } from "@material-ui/core";
import React, { useState } from "react";
import NewPost from "./NewPost.js";
import PostList from "./PostList.js";

export default function Newsfeed() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    const updatedPosts = [...posts];
    updatedPosts.unshift(post);
    setPosts(updatedPosts);
  };

  const removePost = (post) => {
    const updatedPosts = [...posts];
    const index = updatedPosts.indexOf(post);
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  return (
    <Card>
      <Typography type="title">Newsfeed</Typography>
      <Divider />
      <NewPost addUpdate={addPost} />
      <Divider />
      <PostList removeUpdate={removePost} posts={posts} />
    </Card>
  );
}
