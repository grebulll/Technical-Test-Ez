import { ReactNode } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Sidebar from '../organisms/Sidebar';
import React from 'react';

interface DashboardTemplateProps {
  onLogout: () => void;
  children?: ReactNode;
}

const DashboardTemplate = ({ onLogout, children }: DashboardTemplateProps) => {
  return (
    <Box>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
            <Button color="inherit" onClick={onLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <Box sx={{ padding: 3, width: '100%' }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default DashboardTemplate;
