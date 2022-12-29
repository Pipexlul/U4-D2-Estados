import React from "react";

const Button = ({ text, isActive, onClick }) => {
  return (
    <button disabled={!isActive} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
