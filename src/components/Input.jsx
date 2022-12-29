import React from "react";

const Input = ({
  name,
  setName,
  password,
  setPassword,
  nameId,
  passwordId,
}) => {
  return (
    <>
      <div className="mb-6">
        <label className="form-label" htmlFor={nameId}>
          Nombre
        </label>
        <input
          className="form-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id={nameId}
          placeholder="Ingrese su nombre"
        />
      </div>
      <div className="mb-6">
        <label className="form-label" htmlFor={passwordId}>
          Contraseña
        </label>
        <input
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id={passwordId}
          placeholder="Ingrese su contraseña"
        />
      </div>
    </>
  );
};

export default Input;
