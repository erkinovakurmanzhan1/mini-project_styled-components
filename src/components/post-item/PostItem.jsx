import React from "react";

import style from "./PostItem.module.css";

const PostItem = ({ post, number }) => {
  return (
    <li className={style.li}>
      {number + 1}. {post.title} ({post.body} years old)
    </li>
  );
};

export default PostItem;
