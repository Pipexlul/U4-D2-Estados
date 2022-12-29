import "./App.css";

import { useState } from "react";

import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const fields = [
    { name: "name", value: name },
    { name: "password", value: password },
  ];

  const validateFields = () => {
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
      />
      <Button
        text="Login"
        isActive={password === "252525"}
        onClick={validateFields}
      />
    </div>
  );
}

export default App;
