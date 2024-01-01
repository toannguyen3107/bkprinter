import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from "/hcmut.png";
import { grey } from "@mui/material/colors";

const defaultTheme = createTheme();


const ChooseRole = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box 
                sx={{
                    mt: 5, mb: 5,
                    padding: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: 2,
                    borderRadius: 2
                }}
                >
                    <Box component="img" sx={{ height: 70 }} alt="Logo" src={logo} />
                    <Typography component="h1" variant="h5" sx ={{ padding: 2 }}>
                        Hệ thống xác thực tập trung
                    </Typography>
                    <Typography component="h1" variant="h5" sx ={{ padding: 3, fontWeight: 'bold' }}>
                        ĐĂNG NHẬP VỚI VAI TRÒ
                    </Typography>
                    <Button
                        href='login'
                        fullWidth
                        variant="outlined"
                        sx={{ mt: 3, mb: 2 }}
                        //onClick={handleSetUser} 
                    >
                        Cán bộ/Sinh viên trường ĐH Bách khoa
                    </Button>
                    <Button
                        href='login'
                        fullWidth
                        variant="outlined"
                        sx={{ mb: 2 }}
                        //onClick={handleSetAdmin} 
                    >
                        Quản trị hệ thống
                    </Button>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

//export let admin = isAdmin

export default ChooseRole