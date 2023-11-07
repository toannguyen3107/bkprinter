import React from "react";
import { Typography, Box, Grid, Paper, Container } from "@mui/material";
import { styled } from '@mui/material/styles';
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
import './HomePage.css';


const Navbar = () => {
    return (
        <Box sx={{
            alignItems: "center",
            display: "flex",
            margin: "0px 40px 0px 40px",
            height: "70px",
        }}>
            <Link to="/homepage" onClick={() => window.location.reload()} >
                <img src={logo} alt="logo" width={"50px"} height={"50px"} />
            </Link>
            <Typography sx={{
                fontFamily: "Inknut Antiqua", 
                fontWeight: "400", 
                lineHeight: "normal", 
                fontSize: "30px",
                marginLeft: "10px",
                marginRight: "auto"
                }}>
                    <Link to="/homepage" onClick={() => window.location.reload()} >BKPrinter</Link>
            </Typography>
            <Link to="/login" className="login-link">
                <Typography sx={{
                    color: "#0A89FE",
                    fontFamily: "Inria Sans",
                    fontSize: "20px",
                    fontWeight: "400",
                }}>Đăng nhập
                </Typography>
            </Link>
        </Box>
    )
}
const Title = () => {
    return (
        <Box sx={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "center center",
            width: "100%",
            height: "100vh",
            maxHeight: "800px",
            backgroundSize: "100% 100%",
            margineBottom: "60px",
        }}>
            <Box sx={{
                textAlign: "center",
                position: "relative",
                top: "30%",
                width: "100%"
            }}>
                <Typography style={{
                    color: "#045FE8",
                    textAlign: "center",
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "32px",
                    fontWeight: "800",
                    textShadow: "-1px 0 #ffffff, 0 1px #fff, 1px 0 #ffffff, 0 -1px #ffffff",
                    animationDelay: "0.7s",
                    letterSpacing: "2px",
                    lineHeight: "48px",
                    marginBottom: "20px",
                }}>HỆ THỐNG IN ẤN TẬP TRUNG </Typography>
                <Typography style={{
                    fontSize: "52px",
                    color: "#2196f3",
                    letterSpacing: "1px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    fontFamily: "Roboto, sans-serif",
                    textShadow: "-1px 0 #ffffff, 0 1px #fff, 1px 0 #ffffff, 0 -1px #ffffff",
                    animationDelay: "1.1s",

                }}>BKPRINTER</Typography>            
            </Box>
        </Box>
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
                margin: "20px 20px 20px 50px",
                display: "flex",
                fontSize: "16px",
                color: "white",
                lineHeight: "30px",
                textAlign: "left",
            }}>
                <Box sx={{
                    width: "33.33%",
                }}>
                    <Typography style={{fontWeight: "bold",  textAlign: "left",}}>HỆ THỐNG IN ẤN TẬP TRUNG</Typography>
                    <Box sx={{marginLeft: "0%"}}><img src={logofooter} alt="logo" width={"100px"} /></Box>
                </Box>
                <Box sx={{
                    width: "33.33%",
                }}>
                    <Typography style={{fontWeight: "bold"}}>WEBSITE</Typography>
                    <Link href="/homepage" onClick={() => window.location.reload()} ><p style={{color: "white"}}>BKPrinter</p></Link>
                </Box>
                <Box sx={{
                    width: "33.33%",
                }}>
                    <Typography style={{fontWeight: "bold"}}>CONTACT</Typography>
                    <div style={{display: "flex", alignItems: "center"}}><FacebookIcon />Facebook: </div>
                    <div style={{display: "flex", alignItems: "center"}}><MailIcon />Mail: </div>
                </Box>
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
    margin: "10px 10px 10px 10px",
    color: "black",
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
                        <h4>GIỚI THIỆU</h4>
                        <Typography style={textStyled}>
                            Đây là website cung cấp dịch vụ in ấn thông minh được tạo ra bởi 7 sinh viên của trường ĐH Bách Khoa
                            TP HCM.
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <InfoIcon />
                        <h4>THÔNG BÁO</h4>
                        <Typography style={textStyled}>
                            Website chính thức mở beta vào ngày 1/11/2023.
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <MenuBookIcon />
                        <h4>HƯỚNG DẪN</h4>
                        <Typography style={textStyled}>
                           <p> 1. Trước khi in các bạn phải đăng nhập.</p>
                           <p> 2. Vào mục "Tải tài liệu" để tải tài liệu cần in. </p>
                           <p> 3. Tùy chỉnh trang in theo ý muốn và nhấn nút in. </p>
                        </Typography>
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
            <Navbar  />
            <Title  />
            <Infomation  />
            <Footer />
        </Box>
    )
}
export default HomePage;