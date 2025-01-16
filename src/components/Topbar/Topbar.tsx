import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
// import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { AppBar } from '@/styles/customThemes';
import { Switch } from '@mui/material';

// const drawerWidth = 240;


interface TopBarProps {
  open: boolean;
  handleDrawerOpen: () => void;
}




const TopBar: React.FC<TopBarProps> = ({ open, handleDrawerOpen }) => {

  const [toggleDarkMode, setToggleDarkMode] = useState(true);


  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };


  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[
            {
              mr: 2,
            },
            open && { display: 'none' },
          ]}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Persistent drawer
        </Typography>
        <Box>
          <IconButton color="inherit">
            <Switch checked={toggleDarkMode} onChange={toggleDarkTheme}  />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
