// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#B5AA9D' }}>

      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Roxy K
        </Typography>
        <Box>
          <Button color="inherit" href="#home">Home</Button>
          <Button color="inherit" href="#projects">Projects</Button>
          <Button color="inherit" href="#skills">Skills</Button>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
