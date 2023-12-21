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
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios


const defaultTheme = createTheme();

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [message, setMessage] = React.useState('');

  const navigate  = useNavigate(); 

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/api/login', {
        email: username,
        password,
      });

      localStorage.setItem('accessToken', response.data.accessToken);
      // Assuming your backend sends a response with a success message

      setMessage(`Logged in as ${username}`);
      window.location.href = '/app';
    } catch (error) {
      // Handle authentication error
      setMessage('Login failed. Check your credentials.');
    }
  };

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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="user_name"
              label="Tên đăng nhập"
              name="user_name"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            />
            <Button
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
            <Typography variant="body2" color="error">
              {message}
            </Typography>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
