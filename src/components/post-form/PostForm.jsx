import React, { useState } from "react";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";

import "./PostForm.css";

const PostForm = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const bodyHandler = (e) => {
    setBody(e.target.value);
  };

  const addNewPost = (event) => {
    event.preventDefault();

    const newPost = {
      id: new Date(),
      title,
      body,
    };

    props.onPost(newPost);
    setTitle("");
    setBody("");
  };

  return (
    <div className="box">
      <Input
        
        onChange={titleHandler}
        value={title}
        labelname="Username"
        type="text"
        placeholder="Write your name...:)"
      />
      <Input
        onChange={bodyHandler}
        value={body}
        labelname="Age(Years)"
        type="number"
        placeholder="How old are you?)"
      />
      <Button onClick={addNewPost}  disabled={!body || !title} >ADD USERS</Button>
    </div>
  );
};

export default PostForm;
