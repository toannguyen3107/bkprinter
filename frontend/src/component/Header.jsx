import { Box, Container, Link } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
const Header = () => {
    return (
        <Box component="header"
            sx={{
                display: "flex",
                height: '10vh',
                flexDirection: "row",
                bgcolor: '#fff',
                padding: '0.5rem',
                alignItems: 'center'
            }}
        >
            <Box sx={{width: "0.8", display:'flex', alignItems: 'center'}}>
                <Link 
                    sx={{
                        height: '40px',
                        width: '40px',
                        marginRight: '24px'
                    }}
                    href='/'
                >
                    <img src="/hcmut.png" alt="img logo title" style={{height: '40px', width: '40px'}} />
                </Link>
                <Typography variant="h3" sx={{ fontSize: '20px', fontWeight: '500' }}>BKPRINTER</Typography>

            </Box>
            
            <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px'}}>
              <Avatar sx={{ bgcolor: '#3EA6A0'}}>
                <AccountCircleIcon />
            </Avatar>  
                    <Link href="#" underline='none' sx={{fontSize: '20px'}}>Ho va Ten</Link>
            </Box>
            
        </Box>
    )
}

export default Header