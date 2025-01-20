import React from 'react';
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
import { useColorScheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Tooltip } from '@mui/material';

// const drawerWidth = 240;


interface TopBarProps {
  open: boolean;
  handleDrawerOpen: () => void;
}




const TopBar: React.FC<TopBarProps> = ({ open, handleDrawerOpen }) => {


  const { mode, systemMode, setMode } = useColorScheme();


  const toggleDarkTheme = React.useCallback(
    () => {
      if (mode) {
        const currMode = mode === 'dark' ? 'light' : 'dark';
        setMode(currMode);
      }
    },
    [mode, systemMode],
  )

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
          <Tooltip title="Toggle Theme">
          <IconButton color="inherit" onClick={() => toggleDarkTheme()}>
            {mode === 'dark' ? <LightModeIcon onClick={toggleDarkTheme} /> : <DarkModeIcon onClick={toggleDarkTheme} />}
          </IconButton>
          </Tooltip>
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
