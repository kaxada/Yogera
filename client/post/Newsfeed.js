import { Card, Divider, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import NewPost from "./NewPost.js";
import PostList from "./PostList.js";
import { listNewsFeed } from "./api-post.js";

export default function Newsfeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const Signal = abortController.signal;

    listNewsFeed({
      userId: jwt.user._id
      }, {
      t: jwt.token
      }, signal).then((data) => {
      if (data.error) {
      console.log(data.error)
      } else {
      setPosts(data)
      }
      })

    return () => {
      abortController.abort()
    };
  }, []);

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
