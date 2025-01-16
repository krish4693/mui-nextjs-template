'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette:{
    mode:'dark',
    primary:{
      // main:"#a57e2c",
      main: "#f06306",
      light:"#fa8539"

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