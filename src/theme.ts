'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette:{
    primary:{
      main:"#fa8539",
      // main: "#f06306",
      light:"#ffedd3"

    },
    secondary:{
      // main:"#2e74c9"
      main:"#262626",
    },

  },
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-roboto)',

    h1:{
      fontSize:"3rem",
      fontWeight:600,
    }, 
    h2:{
      fontSize:"1.75rem",
      fontWeight:600, 
    }, 
    h3:{
      fontSize:"1.5rem",
      fontWeight:600,
    },
  },
});

export default theme;