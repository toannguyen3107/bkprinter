import React from "react";
import { Typography, Box, Grid, Paper, Container } from "@mui/material";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AspectRatio from '@mui/joy/AspectRatio';
import background from "./background.png";
import footer from "./footer.png";
import logo from "./logo.png";
import logofooter from "./logofooter.png";
import { Link } from 'react-router-dom';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import InfoIcon from '@mui/icons-material/Info';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';

const theme = createTheme();

theme.typography.h5 = {
    fontSize: '0.7rem',
    '@media (min-width:600px)': {
      fontSize: '0.9rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
  };

theme.typography.h4 = {
    fontSize: '1rem',
    '@media (min-width:600px)': {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
  };

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
  },
};

theme.typography.h2 = {
    fontSize: '1.5rem',
    '@media (min-width:600px)': {
      fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    },
  };
const ButtonAppBar = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{height: '70px', backgroundColor: 'white'}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => window.location.reload()}
            >
                <Link to="/" >
                    <img src={logo} alt="logo" width={'50px'} height={'50px'} />
                </Link>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black'}}>
              BKPrinter
            </Typography>
            <Button color="inherit"><Link to='/role'>Đăng nhập</Link></Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  };

const Title = () => {
    return (
        <AspectRatio ratio="16/7" sx={{
            width: '100%',
            marginBottom: "0px",
            marginTop: '70px',
        }}>
            <Box sx={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "center center",
                backgroundSize: "100% 100%",
            }}>
                <Box sx={{
                    paddingTop: '15%',
                    width: "100%",
                    height: "100%",
                }}>
                    <ThemeProvider theme={theme}>
                        <Typography variant="h3" style={{
                            color: "#045FE8",
                            textAlign: "center",
                            fontFamily: "Roboto, sans-serif",
                            fontWeight: "800",
                            textShadow: "-1px 0 #ffffff, 0 1px #fff, 1px 0 #ffffff, 0 -1px #ffffff",
                            animationDelay: "0.7s",
                            letterSpacing: "2px",
                            marginBottom: "1%",
                        }}>HỆ THỐNG IN ẤN TẬP TRUNG </Typography>
                        <Typography variant="h2" style={{
                            // fontSize: {
                            //     lg: "52px",
                            //     md: "52px",
                            //     xs: "20px",
                            // },
                            color: "#2196f3",
                            letterSpacing: "1px",
                            fontWeight: "600",
                            textTransform: "uppercase",
                            fontFamily: "Roboto, sans-serif",
                            textShadow: "-1px 0 #ffffff, 0 1px #fff, 1px 0 #ffffff, 0 -1px #ffffff",
                            animationDelay: "1.1s",
                            textAlign: 'center',

                        }}>BKPRINTER</Typography>            
                    </ThemeProvider>
                </Box>
            </Box>
        </AspectRatio>
    )
}
const Footer = () => {
    return (
        <Box sx={{
            backgroundImage: `url(${footer})`,
            backgroundPosition: "center center",
            backgroundAttachment: "absolute",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            width: "100%",
            height: "199px",
            position: "absolute",
            bottom: "0",
        }}>
            <Box sx={{
                margin: "20px 1% 20px 2%",
                display: "flex",
                fontSize: "16px",
                color: "white",
                lineHeight: "30px",
                textAlign: "left",
            }}> 
            <ThemeProvider theme={theme}>
                <Box sx={{
                    width: "33.33%",
                }}>
                    <Typography variant="h5" style={{fontWeight: "bold",  textAlign: "left",}}>HỆ THỐNG IN ẤN TẬP TRUNG</Typography>
                    <Box sx={{marginLeft: "0%"}}><img src={logofooter} alt="logo" width={"100px"} /></Box>
                </Box>
                <Box sx={{
                    width: "33.33%",
                }}>
                    <Typography variant="h5" style={{fontWeight: "bold"}}>WEBSITE</Typography>
                    <Link href="/homepage" onClick={() => window.location.reload()} ><p style={{color: "white"}}>BKPrinter</p></Link>
                </Box>
                <Box sx={{
                    width: "33.33%",
                }}>
                    <Typography variant="h5" style={{fontWeight: "bold"}}>CONTACT</Typography>
                    <Typography variant="h5" style={{display: "flex", alignItems: "center"}}><FacebookIcon />Facebook: </Typography>
                    <Typography variant="h5" style={{display: "flex", alignItems: "center"}}><MailIcon />Mail: </Typography>
                </Box>
                </ThemeProvider>
            </Box>
        </Box>
    )
}
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "100%"
  }));
const textStyled = {
    textAlign: "left",
    margin: "0px 10px 0px 10px",
    color: "black",
    fontWeight: 'normal',
}
const Infomation = () => {
    return (
            <Grid container columnSpacing={3} sx={{
                marginTop: "40px",
                marginBottom: "240px"
            }}>
                <Grid item xs={4}>
                    <Item>
                        <WavingHandIcon />
                        <ThemeProvider theme={theme}>
                            <Typography variant="h5">GIỚI THIỆU</Typography>
                            <Typography variant="h5" style={textStyled}>
                                Đây là website cung cấp dịch vụ in ấn thông minh được tạo ra bởi 7 sinh viên của trường ĐH Bách Khoa
                                TP HCM.
                            </Typography>
                        </ThemeProvider>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <InfoIcon />
                        <ThemeProvider theme={theme}>
                            <Typography variant="h5">THÔNG BÁO</Typography>
                            <Typography variant="h5" style={textStyled}>
                                Website chính thức mở beta vào ngày 1/11/2023.
                            </Typography>
                        </ThemeProvider>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <ThemeProvider theme={theme}>
                            <MenuBookIcon />
                            <Typography variant="h5">HƯỚNG DẪN</Typography>
                            <Typography variant='h5' style={textStyled}> 1. Trước khi in các bạn phải đăng nhập.</Typography>
                            <Typography variant='h5' style={textStyled}> 2. Vào mục "Tải tài liệu" để tải tài liệu cần in. </Typography>
                            <Typography variant='h5' style={textStyled}> 3. Tùy chỉnh trang in theo ý muốn và nhấn nút in. </Typography>
                        </ThemeProvider>
                    </Item>
                </Grid>
            </Grid>
    )
}
const HomePage = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            left: "5%",
            width: "90%",
            backgroundColor: "#F8F4FC",
            // height: "200vh"
        }}>
            <ButtonAppBar />
            <Title  />
            <Infomation  />
            <Footer />
        </Box>
    )
}
export default HomePage;