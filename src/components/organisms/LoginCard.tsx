import { Paper, Typography } from "@mui/material";
import LoginForm from "../molecules/LoginForm";
import React from "react";

interface LoginCardProps {
  onLogin: (username: string, password: string) => void;
}

const LoginCard = ({ onLogin }: LoginCardProps) => {
  return (
    <Paper elevation={3} sx={{ padding: 3, marginTop: 8, textAlign: "center" }}>
      <Typography variant="h5">Login</Typography>
      <LoginForm onSubmit={onLogin} />
    </Paper>
  );
};

export default LoginCard;
