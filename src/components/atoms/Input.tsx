import { TextField } from "@mui/material";
import React from "react";

interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, type = "text", value, onChange }: InputProps) => {
  return <TextField fullWidth margin="normal" label={label} type={type} value={value} onChange={onChange} />;
};

export default Input;
