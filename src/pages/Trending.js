import React from "react";
import TrendingItem from "../components/TrendingItem";

const Trending = () => {
  const trendingPosts = [
    { title: "Wellness Journey", interactions: "12.4k" },
    { title: "Family Moments", interactions: "8.2k" },
    { title: "Personal Growth", interactions: "5.7k" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Trending Posts</h1>
      <div className="space-y-4">
        {trendingPosts.map((post, index) => (
          <TrendingItem
            key={index}
            title={post.title}
            interactions={post.interactions}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;

// const Trending = () => {
//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold mb-4">Trending Posts</h1>
//       <div className="space-y-4">
//         <div className="bg-gray-200 p-4 rounded-md shadow">
//           <h2 className="font-semibold">Wellness Journey</h2>
//           <p>12.4k interactions</p>
//         </div>
//         <div className="bg-gray-200 p-4 rounded-md shadow">
//           <h2 className="font-semibold">Family Moments</h2>
//           <p>8.2k interactions</p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Trending;