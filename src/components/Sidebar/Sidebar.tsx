  import React from 'react';
  import Drawer from '@mui/material/Drawer';
  import Divider from '@mui/material/Divider';
  import List from '@mui/material/List';
  import ListItem from '@mui/material/ListItem';
  import ListItemButton from '@mui/material/ListItemButton';
  import ListItemIcon from '@mui/material/ListItemIcon';
  import ListItemText from '@mui/material/ListItemText';
  import IconButton from '@mui/material/IconButton';
  import ChevronRightIcon from '@mui/icons-material/ChevronRight';
  import { styled, useTheme } from '@mui/material/styles';
  import { Settings, Logout, Dashboard } from '@mui/icons-material';
  import { useRouter } from 'next/navigation'; // Use Next.js router for navigation
  import MenuIcon from '@mui/icons-material/Menu';
  import LogoContainer from '../custom-containers/logoContainer';
  import Image from 'next/image';
  import logo from '../../../public/social.png';

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  interface SideDrawerProps {
    drawerWidth: number;
    open: boolean;
    handleDrawerClose: () => void;
  }

  const SideDrawer: React.FC<SideDrawerProps> = ({ drawerWidth, open, handleDrawerClose }) => {
    const theme = useTheme();
    const router = useRouter(); 

    // Drawer items array
    const drawerItems = [
      { text: 'Dashboard', icon: <Dashboard />, path: '/dashboard' }, 
      { text: 'Settings', icon: <Settings />, path: '/dashboard/settings' },
      { text: 'Logout', icon: <Logout />, path: '/login' }, 
    ];

    return (
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <LogoContainer
            renderItem={() => (
              <Image src={logo} alt="logo"/>
            )}
            size={32}
            containerStyle={{ justifyContent: 'flex-start' }}
          />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <MenuIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {drawerItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => router.push(item.path)} 
                sx={{
                  "&.Mui-selected": {
                    bgcolor: "primary.light",
                    borderRadius: 2,
                    px: 1,
                    mx: 1,
                  },
                  "&.Mui-selected:hover": {
                    bgcolor: "primary.main",
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  };

  export default SideDrawer;
