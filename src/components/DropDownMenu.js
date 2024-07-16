import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem, IconButton } from '@mui/material';

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        edge="start"
        sx={{ color: '#FF69B4' }}
        aria-label="menu"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        slotProps={{
          paper: {
          sx: {
            backgroundColor: '#333',
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
          },
        },
      }}
        >
        <MenuItem onClick={handleClose}>
          <Link to="/"style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/HairPage"style={{ textDecoration: 'none', color: 'white' }}>Păr</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/MakeupPage"style={{ textDecoration: 'none', color: 'white' }}>Machiaj</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/NailsPage"style={{ textDecoration: 'none', color: 'white' }}>Unghii</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/AboutusPage"style={{ textDecoration: 'none', color: 'white' }}>Despre noi</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/ContactPage"style={{ textDecoration: 'none', color: 'white' }}>Contact</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link to="/WhatsnewPage"style={{ textDecoration: 'none', color: 'white' }}>Noutăți</Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownMenu;