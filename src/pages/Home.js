import React, { useState, useEffect } from "react";
import PostInput from "../components/PostInput";
import PostList from "../components/PostList";
import DailyMoodCheck from "../components/DailyMoodCheck";
import Trending from "./Trending";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem("posts")) || []);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) navigate("/login");
  }, []);

  const addPost = (content, photo, audio) => {
    const newPost = {
      id: Date.now(),
      author: "You",
      timestamp: new Date().toISOString(),
      content,
      photo: photo ? URL.createObjectURL(photo) : null,
      audio: audio ? URL.createObjectURL(audio) : null,
      likes: 0,
      likedByUser: false,
      comments: [],
    };
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const toggleLike = (id) => {
    const updated = posts.map((post) =>
      post.id === id
        ? { ...post, likes: post.likedByUser ? post.likes - 1 : post.likes + 1, likedByUser: !post.likedByUser }
        : post
    );
    setPosts(updated);
    localStorage.setItem("posts", JSON.stringify(updated));
  };

  const addComment = (id, comment) => {
    const updated = posts.map((post) =>
      post.id === id ? { ...post, comments: [...post.comments, comment] } : post
    );
    setPosts(updated);
    localStorage.setItem("posts", JSON.stringify(updated));
  };

  const generateShareLink = (id) => {
    navigator.clipboard.writeText(`${window.location.origin}/post/${id}`);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">Welcome, Jamie Rodriguez!</h1>
        <PostInput addPost={addPost} />
        <PostList
          posts={posts}
          toggleLike={toggleLike}
          addComment={addComment}
          generateShareLink={generateShareLink}
        />
      </div>
      <div className="w-full lg:w-1/4">
        <Trending />
        <DailyMoodCheck />
      </div>
    </div>
  );
};

export default Home;


// import React, { useState, useEffect } from "react";
// import Trending from "./Trending";
// import EmojiPicker from "emoji-picker-react";
// import { formatDistanceToNow } from "date-fns";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//  const navigate = useNavigate();

//   useEffect(() => {
//     const user = localStorage.getItem("user");
//     if (!user) {
//       navigate("/login"); // Redirect to Login if not authenticated
//     }
//   }, [navigate]);



//   // Load posts from localStorage
//   const loadPosts = () => {
//     const savedPosts = localStorage.getItem("posts");
//     try {
//       return savedPosts ? JSON.parse(savedPosts) : [];
//     } catch (error) {
//       console.error("Error parsing posts from localStorage:", error);
//       return [];
//     }
//   };

//   const [posts, setPosts] = useState(loadPosts() || []);
//   const [newPost, setNewPost] = useState(""); // New post input
//   const [commentInputs, setCommentInputs] = useState({}); // Track comment inputs for each post
//   const [visibleComments, setVisibleComments] = useState({}); // Track comment visibility
//   const [photo, setPhoto] = useState(null); // Photo input
//   const [audio, setAudio] = useState(null); // Audio input
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false); // Emoji picker visibility

//   // Add a new post
//   const addPost = () => {
//     if (newPost.trim() !== "" || photo || audio) {
//       const newPostObj = {
//         id: Date.now(),
//         author: "You",
//         timestamp: new Date(), // Ensure this is a Date object
//         content: newPost,
//         photo: photo ? URL.createObjectURL(photo) : null,
//         audio: audio ? URL.createObjectURL(audio) : null,
//         likes: 0,
//         likedByUser: false,
//         comments: [],
//       };

//       const updatedPosts = [newPostObj, ...posts];
//       setPosts(updatedPosts);
//       localStorage.setItem("posts", JSON.stringify(updatedPosts));
//       setNewPost("");
//       setPhoto(null);
//       setAudio(null);
//     }
//   };

//   // Handle Like Toggle
//   const toggleLike = (postId) => {
//     const updatedPosts = posts.map((post) => {
//       if (post.id === postId) {
//         return {
//           ...post,
//           likes: post.likedByUser ? post.likes - 1 : post.likes + 1,
//           likedByUser: !post.likedByUser,
//         };
//       }
//       return post;
//     });
//     setPosts(updatedPosts);
//     localStorage.setItem("posts", JSON.stringify(updatedPosts));
//   };

//   // Handle emoji selection
//   const onEmojiClick = (emojiObject) => {
//     setNewPost((prev) => prev + emojiObject.emoji);
//   };

//   // Handle Add Comment
//   const addComment = (postId) => {
//     if (commentInputs[postId]?.trim() !== "") {
//       const updatedPosts = posts.map((post) => {
//         if (post.id === postId) {
//           return {
//             ...post,
//             comments: [...post.comments, commentInputs[postId]],
//           };
//         }
//         return post;
//       });
//       setPosts(updatedPosts);
//       setCommentInputs({ ...commentInputs, [postId]: "" });
//       localStorage.setItem("posts", JSON.stringify(updatedPosts));
//     }
//   };

//   // Handle Comment Section Visibility Toggle
//   const toggleCommentSection = (postId) => {
//     setVisibleComments((prev) => ({
//       ...prev,
//       [postId]: !prev[postId],
//     }));
//   };

//   // Handle Share Link Generation
//   const generateShareLink = (postId) => {
//     const shareLink = `${window.location.origin}/post/${postId}`;
//     navigator.clipboard.writeText(shareLink);
//     alert("Link copied to clipboard: " + shareLink);
//   };

//   // Function to format relative time safely
//   const formatPostTime = (timestamp) => {
//     try {
//       const date = new Date(timestamp);
//       if (isNaN(date)) {
//         throw new Error("Invalid Date");
//       }
//       return formatDistanceToNow(date, { addSuffix: true });
//     } catch (error) {
//       console.error("Error formatting date:", error);
//       return "Unknown time";
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 p-4">
//       {/* Left Section */}
  

//       {/* Middle Section */}
//       <div className="flex-1">
//         <h1 className="text-3xl font-bold mb-4">Welcome, Jamie Rodriguez!</h1>

//         {/* Share Post */}
//         <div className="bg-gray-100 p-4 rounded-md shadow mb-4">
//           <textarea
//             rows="2"
//             placeholder="Share your joyful moment..."
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//             className="w-full p-2 border rounded mb-2 resize-none"
//           />

//           {/* File Upload Buttons */}
//           <div className="flex items-center gap-4 mb-2">
//             <label className="cursor-pointer">
//               📷 Photo
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => setPhoto(e.target.files[0])}
//                 className="hidden"
//               />
//             </label>
//             <label className="cursor-pointer">
//               🎤 Audio
//               <input
//                 type="file"
//                 accept="audio/*"
//                 onChange={(e) => setAudio(e.target.files[0])}
//                 className="hidden"
//               />
//             </label>
//             <button
//               onClick={() => setShowEmojiPicker((prev) => !prev)}
//               className="cursor-pointer"
//             >
//               😀 Emoji
//             </button>
//           </div>

//           {/* Emoji Picker */}
//           {showEmojiPicker && (
//             <EmojiPicker onEmojiClick={onEmojiClick} className="mb-2" />
//           )}
//           <button
//             onClick={addPost}
//             className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
//           >
//             Post
//           </button>
//         </div>

//         {/* Posts Section */}
//         <div className="max-h-[600px] overflow-y-auto">
//           {posts.map((post) => (
//             <div key={post.id} className="bg-white p-4 mb-4 shadow rounded-md">
//               <h2 className="font-bold">{post.author}</h2>
//               <p className="text-sm text-gray-500">
//                 {formatPostTime(post.timestamp)}
//               </p>
//               <p className="mt-2">{post.content}</p>

//               {/* Display Photo */}
//               {post.photo && (
//                 <img
//                   src={post.photo}
//                   alt="Post"
//                   className="mt-2 max-h-40 object-cover rounded"
//                 />
//               )}

//               {/* Display Audio */}
//               {post.audio && (
//                 <audio controls className="mt-2 w-full">
//                   <source src={post.audio} type="audio/mpeg" />
//                   Your browser does not support the audio element.
//                 </audio>
//               )}

//               {/* Like, Comment, Share Buttons */}
//               <div className="flex gap-6 mt-4">
//                 <button onClick={() => toggleLike(post.id)}>
//                   {post.likedByUser ? "💖" : "🤍"} {post.likes} Likes
//                 </button>
//                 <button onClick={() => toggleCommentSection(post.id)}>
//                   💬 Comment
//                 </button>
//                 <button onClick={() => generateShareLink(post.id)}>🔗 Share</button>
//               </div>

//               {/* Conditional Comments Section */}
//               {visibleComments[post.id] && (
//                 <div className="mt-4">
//                   <input
//                     type="text"
//                     placeholder="Write a comment..."
//                     value={commentInputs[post.id] || ""}
//                     onChange={(e) =>
//                       setCommentInputs({
//                         ...commentInputs,
//                         [post.id]: e.target.value,
//                       })
//                     }
//                     className="border p-2 rounded w-full mb-2"
//                   />
//                   <button
//                     onClick={() => addComment(post.id)}
//                     className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
//                   >
//                     Add Comment
//                   </button>

//                   <div className="mt-2">
//                     {post.comments.map((comment, index) => (
//                       <p key={index} className="text-sm text-gray-700">
//                         - {comment}
//                       </p>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="w-full lg:w-1/4">
//         <Trending />
//         <div className="mt-4 bg-green-100 p-4 rounded shadow">
//           <h2 className="font-bold">Daily Mood Check</h2>
//           <p>How are you feeling today?</p>
//           <div className="flex gap-2 text-2xl mt-2">😊 😌 😲</div>
//           <p className="mt-2">Happy Calm Reflective</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
