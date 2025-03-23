import React from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';

interface LoginCardProps {
  formData: { username: string; password: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLogin: () => void;
  errors: { username?: string; password?: string };
}

const LoginCard: React.FC<LoginCardProps> = ({
  formData,
  onChange,
  onLogin,
  errors,
}) => {
  return (
    <Paper elevation={3} sx={{ padding: 3, marginTop: 8, textAlign: 'center' }}>
      <Typography variant="h5">Login</Typography>
      <TextField
        label="Username"
        name="username"
        value={formData.username}
        onChange={onChange}
        error={!!errors.username}
        helperText={errors.username}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={onChange}
        error={!!errors.password}
        helperText={errors.password}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" fullWidth onClick={onLogin}>
        Login
      </Button>
    </Paper>
  );
};

export default LoginCard;
