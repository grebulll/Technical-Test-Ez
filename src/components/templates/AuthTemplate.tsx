import { Container } from "@mui/material";
import React from "react";
import { ReactNode } from "react";

interface AuthTemplateProps {
  children: ReactNode;
}

const AuthTemplate = ({ children }: AuthTemplateProps) => {
  return (
    <Container component="main" maxWidth="xs">
      {children}
    </Container>
  );
};

export default AuthTemplate;
