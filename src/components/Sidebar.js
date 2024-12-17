import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaSearch, FaPlusCircle, FaSmile, FaUser, FaSignOutAlt } from "react-icons/fa";

const SideHeader = () => {
  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Search", path: "/search", icon: <FaSearch /> },
    { name: "Create", path: "/create", icon: <FaPlusCircle /> },
    { name: "Family", path: "/family", icon: <FaSmile /> },
    { name: "Profile", path: "/profile", icon: <FaUser /> },
    { name: "Logout", path: "/logout", icon: <FaSignOutAlt /> },
  ];

  return (
    <div className="w-20 sm:w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col items-center sm:items-start p-2 sm:p-4 shadow-sm">
      {/* Profile Avatar */}
      <div className="flex items-center space-x-4 w-full mb-8">
        <img
          src="https://via.placeholder.com/100" // Placeholder image
          alt="Profile"
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border border-gray-300"
        />
        <h2 className="text-gray-800 font-semibold text-lg hidden sm:block">
          Doll
        </h2>
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col space-y-6 w-full">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center sm:space-x-4 text-gray-600 hover:text-blue-500 transition-all duration-300 p-2 rounded-md ${
                isActive ? "bg-blue-100 text-blue-500" : "hover:bg-gray-100"
              }`
            }
          >
            <div className="text-xl">{item.icon}</div>
            <span className="hidden sm:block">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default SideHeader;
