import "./App.css";

import { useState } from "react";

import Input from "./components/Input";

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
    </div>
  );
}

export default App;
