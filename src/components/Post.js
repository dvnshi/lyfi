import React, { useState } from "react";
import CommentsSection from "./CommentsSection";

const Post = ({ post, toggleLike, addComment, generateShareLink }) => {
  const [visibleComments, setVisibleComments] = useState(false);

  return (
    <div className="bg-white p-4 mb-4 shadow rounded-md">
      <h2 className="font-bold">{post.author}</h2>
      <p className="text-sm text-gray-500">{post.timestamp}</p>
      <p className="mt-2">{post.content}</p>

      {post.photo && (
        <img
          src={post.photo}
          alt="Post"
          className="mt-2 max-h-40 object-cover rounded"
        />
      )}

      {post.audio && (
        <audio controls className="mt-2 w-full">
          <source src={post.audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}

      {/* Like, Comment, Share */}
      <div className="flex gap-6 mt-4">
        <button onClick={() => toggleLike(post.id)}>
          {post.likedByUser ? "💖" : "🤍"} {post.likes} Likes
        </button>
        <button onClick={() => setVisibleComments((prev) => !prev)}>
          💬 Comment
        </button>
        <button onClick={() => generateShareLink(post.id)}>🔗 Share</button>
      </div>

      {/* Comments */}
      {visibleComments && (
        <CommentsSection
          postId={post.id}
          comments={post.comments}
          addComment={addComment}
        />
      )}
    </div>
  );
};

export default Post;
