import React from "react";

const Input = ({ name, setName, password, setPassword }) => {
  return (
    <>
      <label htmlFor="nameField">Nombre</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        id="nameField"
      />
      <label htmlFor="passwordField">Contraseña</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="passwordField"
      />
    </>
  );
};

export default Input;
