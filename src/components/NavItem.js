import React from 'react';

const NavItem = ({ icon, active, onClick }) => (
  <button
    className={`p-3 rounded-full transition-all duration-300 w-12 h-12 flex items-center justify-center ${
      active
        ? 'bg-blue-100 text-blue-600'
        : 'text-gray-500 hover:bg-gray-100'
    }`}
    onClick={onClick}
  >
    {icon}
  </button>
);

export default NavItem;