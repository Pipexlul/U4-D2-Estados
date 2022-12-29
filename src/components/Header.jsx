import React from "react";

const Header = ({ title, desc }) => {
  return (
    <header className="flex flex-col justify-center items-center h-20 bg-gray-700">
      <h2 className="text-2xl text-white">{title}</h2>
      <p className="text-sm text-gray-300 mx-2">{desc}</p>
    </header>
  );
};

export default Header;
