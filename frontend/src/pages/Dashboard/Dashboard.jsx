import * as React from "react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import { Link } from 'react-router-dom'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import logo from "/hcmut.png";
import { Avatar } from "@mui/material";
import { Outlet } from "react-router-dom";
import PrintIcon from '@mui/icons-material/Print';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PaymentsIcon from '@mui/icons-material/Payments';
import FlagIcon from '@mui/icons-material/Flag';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

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
const item = [{
  icon: <PrintIcon />,
  name: 'In Tài Liệu',
  link: '/app/print'
},
{
  icon: <RemoveRedEyeIcon />,
  name: 'Xem Máy In',
  link: '/app/printerlist'
}, {
  icon: <PaymentsIcon />,
  name: 'Hóa Đơn',
  link: '#'
}, {
  icon: <ChangeHistoryIcon />,
  name: 'Lịch sử In',
  link: '#'
}, {
  icon: <FlagIcon />,
  name: 'Phản Hồi',
  link: '#'
}
]

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="absolute" open={open} sx={{ background: "white" }} elevation={0}>
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="black"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{ flexGrow: 4, display: "flex", alignItems: "center" }}
          >
            <Box component="img" sx={{ height: 35 }} alt="Logo" src={logo} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                ml: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                color: "black",
                textDecoration: "none",
              }}
            >
              BK Printer
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              maxWidth: 200,
            }}
          >
            <Avatar alt="Profile" src="/static/images/avatar/2.jpg" />
            <Typography
              variant="p"
              noWrap
              sx={{
                mr: 2,
                ml: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 400,
                color: "black",
                textDecoration: "none",
                lineClamp: 1,
                overflow: "hidden",
              }}
            >
              HO VA TEN
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '80%'
          }}
        >
          <List
          >
            {item.map((obj, idx) => (
              <ListItem key={idx} disablePadding>
                <ListItemButton component={Link} to={obj.link}>
                  <ListItemIcon>
                    {obj.icon}
                  </ListItemIcon>
                  <ListItemText primary={obj.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0
            }}
          >
            <Divider />
            <ListItem disablePadding>
              <ListItemButton component={Link} to={'#'}>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary={'Đăng xuất'} />
              </ListItemButton>
            </ListItem>
          </Box>
        </Box>

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
        <Container maxWidth="lg" sx={{ mt: 1, mb: 4, }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}
