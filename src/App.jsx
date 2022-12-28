import "./App.css";

import { useState } from "react";

import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <Input
        name={name}
        setName={setName}
        password={password}
        setPassword={setPassword}
      />
      <Button text="Login" isActive={password === "252525"} />
    </div>
  );
}

export default App;
