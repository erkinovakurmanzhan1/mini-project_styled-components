import { useState } from "react";
import PostForm from "./components/post-form/PostForm";
import PostList from "./components/post-list/PostList";

import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  posts.sort((a, b) => {
    return b.body - a.body;
  });

  const addPostHandler = (newPost) => {
    setPosts((posts) => [...posts, newPost]);
  };

  return (
    <div className="App">
      <PostForm onPost={addPostHandler} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
