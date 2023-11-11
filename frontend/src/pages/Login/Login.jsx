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
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const defaultTheme = createTheme();

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [password, setPassword] = React.useState('')

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
        if (passwordInputRef.current) {
            passwordInputRef.current.focus();
            requestAnimationFrame(() => {
                passwordInputRef.current.setSelectionRange(password.length, password.length);
            });
        }
    }

    const passwordInputRef = React.useRef()
      
    React.useEffect(() => {
        if (password.inputRef) {
            password.inputRef.current = passwordInputRef.current;
        }
    }, [password.inputRef]);

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
              id="user_name"
              label="Tên đăng nhập"
              name="user_name"
              autoFocus
            />
            <TextField
                value={password}
                margin="normal"
                required
                fullWidth
                name='password'
                label='Mật khẩu'
                type={showPassword ? 'text' : 'password'}
                id='password'
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleTogglePassword} edge="end">
                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                inputRef={passwordInputRef}
            />
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
                <Link href="./role" variant="body2">
                  Đổi vai trò
                </Link>
              </Grid>
              <Grid item>
                <Link href="./ChangePassword" variant="body2">
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

export default Login