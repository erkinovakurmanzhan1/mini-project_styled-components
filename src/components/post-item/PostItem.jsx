import React from "react";

import "./PostItem.css";

const PostItem = ({ post, number }) => {
  return (
    <li>
      {number + 1}. {post.title} ({post.body} years old)
    </li>
  );
};

export default PostItem;
