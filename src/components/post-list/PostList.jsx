import React from "react";

import PostItem from "../post-item/PostItem";
import style from "./PostList.module.css";

const PostList = ({ posts }) => {
  return (
    <ul className={style.bgcBoxInfo}>
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
