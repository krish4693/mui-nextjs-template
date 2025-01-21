import { Box, Button, Paper, styled } from "@mui/material";
import MuiAppBar, { AppBarProps  } from '@mui/material/AppBar';

const drawerWidth = 240;
interface MuiAppBarProps extends AppBarProps {
    open?: boolean;
}
  
export const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
  }>(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  }));

 export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
 }));
  

 export const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(2),
    // maxWidth: "450px",
    margin: "auto",
    marginTop: theme.spacing(4),
    borderRadius: "12px",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
 }));
  
 export const GoogleButton = styled(Button)({
    width: "100%",
    padding: "12px",
    backgroundColor: "#ffffff",
    color: "#757575",
    border: "1px solid #dadce0",
    "&:hover": {
      backgroundColor: "#f8f9fa",
      border: "1px solid #dadce0",
    },
 });
  
 export const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<MuiAppBarProps>(({ theme }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
      {
        props: ({ open }) => open,
        style: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: `${drawerWidth}px`,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      },
    ],
  }));
  
export const LogoWithContainer = styled(Box)({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    // marginBottom: "1rem",
  });

export const Logo = styled(Box, {
      shouldForwardProp: (prop) => prop !== "$bgColor" && prop !== "$size", // Exclude custom props
    })<{ $bgColor: string; size: number }>(({ $bgColor, size }) => ({
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: $bgColor || "#f5f5f5" ,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  }));