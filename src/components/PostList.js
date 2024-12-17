import React from "react";
import Post from "./Post";

const PostList = ({ posts, toggleLike, addComment, generateShareLink }) => {
  return (
    <div className="max-h-[600px] overflow-y-auto">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          toggleLike={toggleLike}
          addComment={addComment}
          generateShareLink={generateShareLink}
        />
      ))}
    </div>
  );
};

export default PostList;
