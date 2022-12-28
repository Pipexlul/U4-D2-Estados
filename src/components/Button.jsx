import React from "react";

const Button = ({ text, isActive }) => {
  return <button disabled={!isActive}>{text}</button>;
};

export default Button;
