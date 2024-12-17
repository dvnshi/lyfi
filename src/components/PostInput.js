import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";

const PostInput = ({ addPost }) => {
  const [newPost, setNewPost] = useState("");
  const [photo, setPhoto] = useState(null);
  const [audio, setAudio] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleAddPost = () => {
    addPost(newPost, photo, audio);
    setNewPost("");
    setPhoto(null);
    setAudio(null);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow mb-4">
      <textarea
        rows="2"
        placeholder="Share your joyful moment..."
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        className="w-full p-2 border rounded mb-2 resize-none"
      />
      <div className="flex items-center gap-4 mb-2">
        <label className="cursor-pointer">
          📷 Photo
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            className="hidden"
          />
        </label>
        <label className="cursor-pointer">
          🎤 Audio
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => setAudio(e.target.files[0])}
            className="hidden"
          />
        </label>
        <button
          onClick={() => setShowEmojiPicker((prev) => !prev)}
          className="cursor-pointer"
        >
          😀 Emoji
        </button>
      </div>
      {showEmojiPicker && (
        <EmojiPicker
          onEmojiClick={(emoji) => setNewPost((prev) => prev + emoji.emoji)}
          className="mb-2"
        />
      )}
      <button
        onClick={handleAddPost}
        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
      >
        Post
      </button>
    </div>
  );
};

export default PostInput;
