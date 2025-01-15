import React from "react";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import Search from "@mui/icons-material/Search";

const SearchBox = () => {
  return (
    <Box>
      <TextField
        label="Search"
        name="search"
        type="search"
        variant="outlined"
        size="small"
        // sx={{ width: 320 }} // Adjust width for smaller size
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
