import { Box, Container, Link } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
const HomeHeader = () => {
    return (
        <Box component="header"
            sx={{
                display: "flex",
                flexDirection: "row",
                padding: '0.5rem',
                alignItems: 'center',
                justifyContent: 'center',
                
            }}
            >
                {/* header */}
            <Box 
            sx={{
                display: "flex",
                width:'90%',
                height: '100vh',
                flexDirection: "row",
                bgcolor: '#fff',
                
            }}
            >
            <Box
            sx={{
                display: "flex",
                width:'100%',
                height: '10vh',
                flexDirection: "row",
                bgcolor: '#F2E2E0',
                alignItems: 'center',
                justifyContent: 'center',
                
            }}>
                <Box sx={{width: "0.8", display:'flex', alignItems: 'center',
                 }}>
                    <Link 
                        sx={{
                            height: '50px',
                            width: '60px',
                            marginRight: '4px'
                        }}
                        href='/'
                    >
                        <img src="./hcmut.png" alt="img logo title" style={{height: '50px', width: '50px'}} />
                    </Link>
                    <Typography variant="h3" sx={{ fontSize: '20px', fontWeight: '500' }}>BKPRINTER</Typography>

                </Box>
                
                <Box sx={{display: 'flex', flexDirection: 'row', gap: '12px'}}>
            
                        <Link href="./login" underline='none' sx={{fontSize: '20px',
                        textDecoration:'underline'}}>
                            Đăng nhập
                        </Link>
                </Box>
            </Box>
            
            <Box
            sx={{
                display: "flex",
                width:'89%',
                height:'50%'
,               flexDirection: "row",
                backgroundImage: 'url(./siuu.png)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                position:'absolute',
                top:'10%',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                color:'#C373B9',
                fontSize:'6rem',
                fontWeight:'bold',
                
            }}>
                HỆ THỐNG BÚ XUYÊN QUỐC GIA
            </Box>
            <Box 
            sx={{
                display: "flex",
                width:'89%',
                height: '30vh',
                flexDirection: "row",
                backgroundImage: 'url(./footerHome.png)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                padding: '0.5rem',
                alignItems: 'center',
                justifyContent: 'center',
                position:'absolute',
                bottom:'0',
            }}
        >
            
            <Box sx={{ width:'100%',display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px', justifyContent: 'space-between'}}>
                <Box sx={{ width:'50%',display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px', justifyContent: 'start'}}>
                    <Link 
                        sx={{
                            height: '40px',
                            width: '40px',
                            marginRight: '4px'
                        }}
                        href='/'
                    >
                        <img src="./hcmut.png" alt="img logo title" style={{height: '40px', width: '40px'}} />
                    </Link>
                    <Typography variant="h3" sx={{ fontSize: '18px', fontWeight: '400', color: 'white'}}>Hệ thống in ấn </Typography>
                </Box>
              
                <Link href="https://zalo.me/g/slgikf657" underline='none' 
                sx={{fontSize: '16px',
                    color: 'white'}}>
                        Liên hệ

                </Link>
                <Link href="https://zalo.me/g/slgikf657" underline='none' 
                sx={{fontSize: '16px',
                    color: 'white'}}>
                        Hướng dẫn
                </Link>
            </Box>

            
            
            
        </Box>

        </Box>


      
        </Box>
        
    )
}

export default HomeHeader
