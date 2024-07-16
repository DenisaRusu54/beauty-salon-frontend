import React, { useState } from 'react';
import { Box, TextField, IconButton, Paper, List, ListItem, Typography } from '@mui/material';
import { AiOutlineSearch } from 'react-icons/ai';
import { words } from '../data';

const SearchBar = () => {
  const [activeSearch, setActiveSearch] = useState([]);

  const handleSearch = (e) => {
    if (e.target.value === '') {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(words.filter(w => w.includes(e.target.value)).slice(0, 8));
  };

  return (
    <Box component="form" sx={{ width: 200, position: 'relative' }}>
      <Box sx={{ position: 'relative' }}>
        <TextField
          type="search"
          placeholder="Type Here"
          variant="outlined"
          onChange={(e) => handleSearch(e)}
          sx={{ width: '70%', borderRadius: '70px', bgcolor: 'background.paper', pr: 8 }}
        />
        <IconButton
          type="submit"
          sx={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', bgcolor: '#FF69B4', color: 'white', borderRadius: '70%' }}
        >
          <AiOutlineSearch />
        </IconButton>
      </Box>
      {activeSearch.length > 0 && (
        <Paper sx={{ position: 'absolute', top: 64, p: 5, width: '70%', bgcolor: 'grey.800', color: 'white', borderRadius: '20px', left: '50%', transform: 'translateX(-50%)' }}>
          <List>
            {activeSearch.map((s, index) => (
              <ListItem key={index} sx={{ p: 1 }}>
                <Typography>{s}</Typography>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default SearchBar;

