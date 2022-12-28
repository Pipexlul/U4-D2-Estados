import React from "react";

const Input = ({ name, setName, password, setPassword }) => {
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </>
  );
};

export default Input;
