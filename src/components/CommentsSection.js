import React, { useState } from "react";

const CommentsSection = ({ postId, comments, addComment }) => {
  const [commentInput, setCommentInput] = useState("");

  const handleAddComment = () => {
    if (commentInput.trim()) {
      addComment(postId, commentInput);
      setCommentInput("");
    }
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Write a comment..."
        value={commentInput}
        onChange={(e) => setCommentInput(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <button
        onClick={handleAddComment}
        className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
      >
        Add Comment
      </button>
      <div className="mt-2">
        {comments.map((comment, index) => (
          <p key={index} className="text-sm text-gray-700">
            - {comment}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
