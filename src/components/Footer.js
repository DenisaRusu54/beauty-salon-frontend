import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, textAlign: 'center', backgroundColor: '#333', color: '#fff' }}>
      <Typography variant="body1">
        &copy; 2024 M&D Beauty Lab. Toate drepturile rezervate.
      </Typography>
      <Box sx={{ mt: 2 }}>
        <IconButton
          aria-label="Facebook"
          href="https://www.facebook.com/profile.php?id=61562617402400"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#FF69B4' }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          aria-label="Instagram"
          href="https://www.instagram.com/mdbeauty_lab?igsh=eHU0bjg5cW5xa2No"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#FF69B4' }}
        >
          <Instagram />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
