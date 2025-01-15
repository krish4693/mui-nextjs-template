import React from 'react';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import Search from '@mui/icons-material/Search';

const SearchBox = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-start', p: 2 }}>
      <TextField
        label="Search"
        name="search"
        type="search"
        variant="outlined"
        sx={{ width: 320, m: 1 }} // Adjust width for smaller size
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" aria-label="search">
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
};

export default SearchBox;
