import React from "react";
import { Typography, Box } from "@mui/material";
import background from "./background.png";
import footer from "./footer.png";
import logo from "./logo.png";
import logofooter from "./logofooter.png";
import { Link } from 'react-router-dom';
import './HomePage.css';


const Navbar = () => {
    return (
        <Box sx={{
            alignItems: "center",
            display: "flex",
            margin: "0px 40px 0px 40px",
        }}>
            <Link to="/homepage" onClick={() => window.location.reload()} >
                <img src={logo} alt="logo" width={"40px"} height={"40px"} />
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
const Content = () => {
    return (
        <Box sx={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "center center",
            width: "100%",
            height: "100vh",
            backgroundSize: "cover",
            display: "block",
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
            height: "300px",
            position: "absolute",
            bottom: "0"
        }}>
            <Box sx={{
                margin: "20px 20px 20px 20px",
                display: "flex",
                textAlign: "center",
                fontSize: "16px",
                color: "white",
                lineHeight: "30px"
            }}>
                <Box sx={{
                    width: "33.33%",
                }}>
                    <Typography style={{fontWeight: "bold"}}>HỆ THỐNG IN ẤN TẬP TRUNG</Typography>
                    <img src={logofooter} alt="logo" width={"33%"}/>
                </Box>
                <Box sx={{
                    width: "33.33%"
                }}>
                    <Typography style={{fontWeight: "bold"}}>WEBSITE</Typography>
                </Box>
                <Box sx={{
                    width: "33.33%"
                }}>
                    <Typography style={{fontWeight: "bold"}}>CONTACT</Typography>
                </Box>
            </Box>
        </Box>
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
            height: "2000px"
        }}>
            <Navbar />
            <Content />
            <Footer />
        </Box>
    )
}
export default HomePage;