import "./App.css";

import { useState } from "react";

import Input from "./components/Input";
import Button from "./components/Button";
import Separator from "./components/Separator";
import Header from "./components/Header";
import StatusDisplay from "./components/StatusDisplay";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [nameBonus, setNameBonus] = useState("");
  const [passwordBonus, setPasswordBonus] = useState("");

  const [error, setError] = useState([]);

  const [firstLogin, setFirstLogin] = useState(false);

  const fields = [
    { name: "Nombre (Login Requerido)", value: name },
    { name: "Contraseña (Login Requerido)", value: password },
  ];

  const fieldsBonus = [
    { name: "Nombre (Login Bonus)", value: nameBonus },
    { name: "Contraseña (Login Bonus)", value: passwordBonus },
  ];

  const validateFields = (fieldsToCheck) => {
    if (!firstLogin) {
      setFirstLogin(true);
    }

    const invalidFields = [];

    for (const field of fieldsToCheck) {
      if (!field.value.trim()) {
        invalidFields.push({ name: field.name, message: "Campo está vacio" });
      }
    }

    // Special checks for Bonus Login
    if (fieldsToCheck === fieldsBonus && invalidFields.length === 0) {
      const names = nameBonus.trim().split(" ");
      if (names.length !== 2) {
        invalidFields.push({
          name: "Nombre (Login Bonus)",
          message:
            "Nombre debe contener exactamente dos palabras (Nombre y Apellido)",
        });
      } else {
        if (
          names[0].toLowerCase() !== "marie" ||
          names[1].toLowerCase() !== "curie"
        ) {
          invalidFields.push({
            name: "Nombre (Login Bonus)",
            message: "Nombre y/o Apellido incorrecto",
          });
        }

        if (passwordBonus !== "1867") {
          invalidFields.push({
            name: "Contraseña (Login Bonus)",
            message: "Año de nacimiento incorrecto",
          });
        }
      }
    }

    if (invalidFields.length) {
      setError(invalidFields);
    } else {
      setError([]);
    }
  };

  return (
    <div className="App">
      <Header
        title="Login Requerido"
        desc="Este login hace aparecer o desaparecer el botón correspondiente si el campo password equivale a 252525. Es basicamente lo que pide el desafio."
      />
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

      <Header
        title="Login Bonus"
        desc="Este login tiene el boton mostrandose todo el tiempo, pero, este no es clickeable si la condición no se cumple."
        hints="Pistas: El boton se habilitara cuando hayan dos palabras en el campo nombre y cualquier combinacion en el campo contraseña.
        Pero para que el login sea exitoso el campo nombre debe contener el nombre y apellido de la primera persona en ganar dos premios Nobel y el campo contraseña deber contener el año en que nació."
      />

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
        isActive={
          nameBonus.trim().split(" ").length === 2 && passwordBonus.length > 0
        }
        isBonus={true}
        onClick={(e) => {
          validateFields(fieldsBonus);
        }}
      />

      <StatusDisplay hasTriedLogin={firstLogin} errors={error} />
    </div>
  );
}

export default App;
