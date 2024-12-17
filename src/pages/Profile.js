import React, { useState } from "react";
import FamilySection from "../components/FamilySection";

const Profile = () => {
  // Mock data for family members and posts
  const [familyMembers] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Emily Smith" },
  ]);

  const [familyPosts] = useState([
    { id: 101, user: "John Doe", content: "Enjoying a great vacation!" },
    { id: 102, user: "Emily Smith", content: "Happy Birthday to me! 🎉" },
  ]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      
      {/* Family Section */}
      <FamilySection familyMembers={familyMembers} familyPosts={familyPosts} />
    </div>
  );
};

export default Profile;
