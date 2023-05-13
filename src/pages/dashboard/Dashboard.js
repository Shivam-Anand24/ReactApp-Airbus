import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems } from "./listItems";
import TableContainer from "./TableContainer";
import CSVUploader from "./CsvUpload";
import backgroundImage from '../../images/logo-a-member-of-ebs-01.png';
import backgroundImage1 from '../../images/bg1.avif';
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const theme = createTheme({
  palette: {
    primary: {
      main: '#40362A' ,  
    },
    secondary: {
      main: '#C44002', 
    },
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    backgroundColor: '#f1f1f1', 
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme({
  palette: {
    primary: {
      main: '#40362A' ,  
    },
    secondary: {
      main: '#C44002', 
    },
  },
});

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
              // color:'#40362A',
              backgroundColor: "#40362A" ,
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                color:"#FFFFFF",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
              color:'#40362A',
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">{mainListItems}</List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
        
      <Typography
        component="h2"
        variant="h6"
        color="inherit"
        sx={{
          my: 2,
          ml: 2,
          fontWeight: "bold",
          color: "#C44002",
          mt: 4,
          textAlign: "center",
          fontFamily: "Roboto",
          fontSize: "5rem",
        }}
      >
      Welome To Dashboard
      </Typography>
      <Typography
  component="div"
  variant="h2"
  color="inherit"
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '500px',
    backgroundImage: `url(${backgroundImage1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  }}
>
  <Box
    component="div"
    sx={{
      backgroundColor: 'white',
      padding: '20px',
      //borderRadius: '8px',
    }}
  >
    <Typography
      component="h2"
      variant="h6"
      color="inherit"
      sx={{
        fontWeight: 'bold',
        color: 'Black',
        fontFamily: 'Roboto',
        fontSize: '2rem',
        textAlign: 'center',
      }}
    >
      Add a Eco-Wash washing machine <br></br>– gain an everyday helper.
    
    </Typography>
    <Typography
      component="h3"
      variant="subtitle1"
      color="inherit"
      sx={{
        fontWeight: 'normal',
        color: 'black',
        fontFamily: 'Roboto',
        fontSize: '1.4rem',
        lineHeight: 1.5,
        margin: '0',
        textAlign: 'center',
      }}
    >
      Designed for efficiency, built to last. Eco-Wash washing machines <br></br>empower you to wash your clothes with spotless results –
       and<br></br> next to no effort.
       Read on to find your perfect washing    appliance.
    </Typography>
  </Box>
</Typography>
      
         
          <CSVUploader />
          <TableContainer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
