import React from 'react';
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';
import logo1 from '../assets/logo1.jpg';
import DropDownMenu from './DropDownMenu';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#000' }}>
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo1} alt="M&D Beauty Lab Logo" style={{ width: '120px', marginRight: '10px' }} />
            <Typography variant="h5" sx={{ color: '#FF69B4' }}>
              M&D Beauty Lab
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '2rem' }}>
            <SearchBar />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <DropDownMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;



