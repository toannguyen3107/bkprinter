import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from "/hcmut.png";
import Password from './Password';
import { grey } from "@mui/material/colors";

const defaultTheme = createTheme();

const Login_for_admin = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="img" sx={{ height: 70 }} alt="Logo" src={logo} />
          <Typography component="h1" variant="h5">
            Đăng nhập
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="admin_name"
              label="Tên đăng nhập"
              name="admin_name"
              autoFocus
            />
            <Password name="admin_password" lable="Mật khẩu"/>
            <Button
              href='./app'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Đăng nhập
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="./login" variant="body2">
                  Đổi vai trò
                </Link>
              </Grid>
              <Grid item>
                <Link href="./change_password" variant="body2">
                  Đổi mật khẩu
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login_for_admin