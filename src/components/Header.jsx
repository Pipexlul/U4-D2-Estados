import React from "react";

const Header = ({ title, desc, hints = "" }) => {
  return (
    <header className="flex flex-col justify-center items-center h-36 bg-gray-700">
      <h2 className="text-2xl text-white">{title}</h2>
      <p className="text-sm text-gray-300 mx-2 whitespace-pre-line">{desc}</p>

      {hints ? (
        <p className="text-sm text-yellow-500 mx-2 whitespace-pre-line font-bold">
          {hints}
        </p>
      ) : null}
    </header>
  );
};

export default Header;
