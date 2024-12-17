import React from "react";
import PostCard from "./PostCard"; // Reuse PostCard for displaying posts

const FamilySection = ({ familyMembers, familyPosts }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Family</h2>

      {/* Display connected family members */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Connected Family Members</h3>
        <ul className="flex flex-wrap gap-4">
          {familyMembers.map((member) => (
            <li
              key={member.id}
              className="bg-gray-200 rounded-md p-2 w-32 text-center"
            >
              {member.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Display family posts */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Family Posts</h3>
        {familyPosts.length > 0 ? (
          familyPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          <p>No posts from family yet!</p>
        )}
      </div>
    </div>
  );
};

export default FamilySection;
