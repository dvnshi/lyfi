import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { supabase } from "../src/utils/supabase";

const App = () => {
  const [user, setUser] = useState(null);

  // Check if user is logged in on app load
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user || null);
    };

    getSession();

    // Listen for auth changes
    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
  }, []);

  return (
    <Router>
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Sidebar (Only visible if user is logged in) */}
        {user && <Sidebar />}

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-8">
          <Routes>
            {/* Protected Routes */}
            {user ? (
              <>
                <Route path="/" element={<Home />} />
                <Route
                  path="/search"
                  element={<h1 className="text-2xl">Search</h1>}
                />
                <Route
                  path="/create"
                  element={<h1 className="text-2xl">Create</h1>}
                />
                <Route
                  path="/myposts"
                  element={<h1 className="text-2xl">My Posts</h1>}
                />
                <Route
                  path="/account"
                  element={<h1 className="text-2xl">Account</h1>}
                />
                <Route path="/trending" element={<Trending />} />
              </>
            ) : (
              <>
                {/* Redirect to Login if not authenticated */}
                <Route path="/" element={<Navigate to="/signup" />} />
              </>
            )}

            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import Home from "./pages/Home";
// import Trending from "./pages/Trending";

// const App = () => {
//   return (


    
//     <Router>
//       <div className="flex flex-col lg:flex-row h-screen">
//         {/* Sidebar */}
//         <Sidebar />

//         {/* Main Content */}
//         <div className="flex-1 p-4 lg:p-8">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/search" element={<h1 className="text-2xl">Search</h1>} />
//             <Route path="/create" element={<h1 className="text-2xl">Create</h1>} />
//             <Route path="/myposts" element={<h1 className="text-2xl">My Posts</h1>} />
//             <Route path="/account" element={<h1 className="text-2xl">Account</h1>} />
//             <Route path="/trending" element={<Trending />} />
//             <Route path="/login" element={<h1 className="text-2xl">Login/Signup</h1>} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;
