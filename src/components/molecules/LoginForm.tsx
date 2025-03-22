import { useState } from "react";
import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Input label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button text="Login" onClick={() => onSubmit(username, password)} />
    </>
  );
};

export default LoginForm;
