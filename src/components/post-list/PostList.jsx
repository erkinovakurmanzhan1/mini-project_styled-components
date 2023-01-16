import React from "react";

import PostItem from "../post-item/PostItem";

const PostList = ({ posts }) => {
  return (
    <ul className="bgcBoxInfo">
      {posts.length ? (
        posts.map((post, index) => (
          <PostItem post={post} key={post.id} number={index} />
        ))
      ) : (
        <h1>Posts not found!</h1>
      )}
    </ul>
  );
};

export default PostList;
