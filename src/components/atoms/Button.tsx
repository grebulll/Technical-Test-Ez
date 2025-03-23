import { Button as MUIButton } from '@mui/material';
import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary';
}

const Button = ({
  text,
  onClick,
  variant = 'contained',
  color = 'primary',
}: ButtonProps) => {
  return (
    <MUIButton
      fullWidth
      variant={variant}
      color={color}
      onClick={onClick}
      sx={{ mt: 2 }}
    >
      {text}
    </MUIButton>
  );
};

export default Button;
