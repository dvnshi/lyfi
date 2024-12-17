import React from "react";

const PostCard = ({ author, timeAgo, content, likes }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md mt-4">
      <div className="flex items-center mb-2">
        <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center">
          <span className="text-gray-600 font-bold">{author.charAt(0)}</span>
        </div>
        <div className="ml-2">
          <h3 className="font-bold">{author}</h3>
          <p className="text-sm text-gray-500">{timeAgo}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{content}</p>
      <div className="flex justify-between text-gray-500 text-sm">
        <span>❤️ {likes}</span>
        <div className="flex space-x-4">
          <span>💬 Comments</span>
          <span>🌟 Share</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
