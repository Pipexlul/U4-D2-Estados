import React from "react";

const Button = ({ text, isActive, isBonus = false, onClick }) => {
  // This is what the challenge requires us to do. It only appears when the password is "252525"
  const RequiredButton = () => {
    return (
      <button
        className={`btn btn-glow ${!isActive ? "btn-disabled" : ""}`}
        hidden={!isActive}
        onClick={onClick}
      >
        {text}
      </button>
    );
  };

  // This is a bonus solution. In this case, the button is visible, but not clickable until the conditions are satisfied.
  const BonusButton = () => {
    return (
      <button
        className={`btn btn-glow ${!isActive ? "btn-disabled" : ""}`}
        disabled={!isActive}
        onClick={onClick}
      >
        {text}
      </button>
    );
  };

  return isBonus ? <BonusButton /> : <RequiredButton />;
};

export default Button;
