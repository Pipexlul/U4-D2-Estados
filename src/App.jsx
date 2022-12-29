import "./App.css";

import { useState } from "react";

import Input from "./components/Input";
import Button from "./components/Button";
import Separator from "./components/Separator";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [nameBonus, setNameBonus] = useState("");
  const [passwordBonus, setPasswordBonus] = useState("");

  const [error, setError] = useState("");

  const fields = [
    { name: "name", value: name },
    { name: "password", value: password },
  ];

  const fieldsBonus = [
    { name: "nameBonus", value: nameBonus },
    { name: "passwordBonus", value: passwordBonus },
  ];

  const validateFields = (fields) => {
    const invalidFields = [];

    for (const field of fields) {
      if (!field.value.trim()) {
        invalidFields.push({ name: field.name, message: "Campo está vacio" });
      }
    }

    if (invalidFields.length) {
      return { isValid: false, invalidFields };
    } else {
      return { isValid: true };
    }
  };

  return (
    <div className="App">
      <Input
        name={name}
        setName={setName}
        password={password}
        setPassword={setPassword}
        nameId="name"
        passwordId="password"
      />
      <Button
        text="Login"
        isActive={password === "252525"}
        onClick={(e) => {
          validateFields(fields);
        }}
      />

      <Separator />

      <Input
        name={nameBonus}
        setName={setNameBonus}
        password={passwordBonus}
        setPassword={setPasswordBonus}
        nameId="nameBonus"
        passwordId="passwordBonus"
      />
      <Button
        text="Login"
        isActive={passwordBonus === "252525"}
        isBonus={true}
        onClick={(e) => {
          validateFields(fieldsBonus);
        }}
      />
    </div>
  );
}

export default App;
