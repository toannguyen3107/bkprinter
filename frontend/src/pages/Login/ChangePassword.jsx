import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from "/hcmut.png";
import { Alert, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const defaultTheme = createTheme();

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4, 
  textAlign: 'center'
};


const ChangePassword = () => {
  const [firstModal, setFirstModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);
  const openFirstModal = () => {
    setFirstModal(true);
  };

  const closeFirstModal = () => {
    setFirstModal(false);
  };

  const openSecondModal = () => {
    setSecondModal(true);
  };

  const [showOldPassword, setShowOldPassword] = useState(false)
  const [oldPassword, setOldPassword] = useState('')

  const [showNewPassword, setShowNewPassword] = useState(false)
  const [newPassword, setNewPassword] = useState('')

  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleToggleOldPassword = () => {
      setShowOldPassword(!showOldPassword);
      if (oldPasswordInputRef.current) {
          oldPasswordInputRef.current.focus();
          requestAnimationFrame(() => {
              oldPasswordInputRef.current.setSelectionRange(oldPassword.length, oldPassword.length);
          });
      }
  }

  const handleToggleNewPassword = () => {
    setShowNewPassword(!showNewPassword);
    if (newPasswordInputRef.current) {
        newPasswordInputRef.current.focus();
        requestAnimationFrame(() => {
            newPasswordInputRef.current.setSelectionRange(newPassword.length, newPassword.length);
        });
    }
  }

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
    if (confirmPasswordInputRef.current) {
        confirmPasswordInputRef.current.focus();
        requestAnimationFrame(() => {
            confirmPasswordInputRef.current.setSelectionRange(confirmPassword.length, confirmPassword.length);
        });
    }
  }

  const oldPasswordInputRef = useRef()
  const newPasswordInputRef = useRef()
  const confirmPasswordInputRef = useRef()
    
  useEffect(() => {
      if (oldPassword.inputRef) {
          oldPassword.inputRef.current = oldPasswordInputRef.current;
      }
  }, [oldPassword.inputRef]);

  useEffect(() => {
    if (newPassword.inputRef) {
        newPassword.inputRef.current = newPasswordInputRef.current;
    }
  }, [newPassword.inputRef]);

  useEffect(() => {
    if (confirmPassword.inputRef) {
        confirmPassword.inputRef.current = confirmPasswordInputRef.current;
    }
  }, [confirmPassword.inputRef]);

  const [error, setError] = useState(null);

  const handleComparePasswords = () => {
    // const { old_password, new_password, confirm_password } = passwords;
    // console.log(old_password)
    // console.log(new_password)
    // console.log(confirm_password)
    if (newPassword === oldPassword) {
      setError('Mật khẩu mới không được trùng với mật khẩu cũ.');
    } else if (newPassword !== confirmPassword) {
      setError('Xác nhận mật khẩu không khớp!');
    } else {
      setError(null);
      openFirstModal();
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
          {error && <Alert severity="error">{error}</Alert>}
          <Box component="img" sx={{ height: 70 }} alt="Logo" src={logo} />
          <Typography component="h1" variant="h5" sx={{mt:2}}>
            Thay đổi mật khẩu
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
                value={oldPassword}
                margin="normal"
                required
                fullWidth
                name='oldPassword'
                label='Mật khẩu cũ'
                type={showOldPassword ? 'text' : 'password'}
                id='oldPassword'
                onChange={(e) => setOldPassword(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleToggleOldPassword} edge="end">
                                {showOldPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                inputRef={oldPasswordInputRef}
            />
            <TextField
                value={newPassword}
                margin="normal"
                required
                fullWidth
                name='newPassword'
                label='Mật khẩu mới'
                type={showNewPassword ? 'text' : 'password'}
                id='newPassword'
                onChange={(e) => setNewPassword(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleToggleNewPassword} edge="end">
                                {showNewPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                inputRef={newPasswordInputRef}
            />
            <TextField
                value={confirmPassword}
                margin="normal"
                required
                fullWidth
                name='confirmPassword'
                label='Xác nhận mật khẩu'
                type={showConfirmPassword ? 'text' : 'password'}
                id='confirmPassword'
                onChange={(e) => setConfirmPassword(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleToggleConfirmPassword} edge="end">
                                {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                inputRef={confirmPasswordInputRef}
            />
            <Grid container>
              <Grid item xs>
                <Button
                  href='./login'
                  type="submit"
                  variant="outlined"
                  sx={{ mt: 3, mb: 2, ml: 4, width: 100 }}
                >
                  Hủy
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={handleComparePasswords}
                  variant="contained"
                  sx={{ mt: 3, mb: 2, mr: 4, width: 150 }}
                >
                  Thay đổi
                </Button>
                <Modal
                  open={firstModal}
                  onClose={closeFirstModal}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography sx={{ mt: 2 }}>
                      Xác nhận thay đổi mật khẩu?
                    </Typography>
                    <Button
                      onClick={closeFirstModal}
                      variant="outlined"
                      sx={{ mt: 3, mb: 2, mr: 2, width: 110 }}
                    >
                      Hủy
                    </Button>
                    <Button
                      onClick={() => {
                        closeFirstModal();
                        openSecondModal();
                      }}
                      variant="contained"
                      sx={{ mt: 3, mb: 2, ml: 2, width: 110 }}
                    >
                      Xác nhận
                    </Button>
                  </Box>
                </Modal>
                <Modal
                  open={secondModal}
                  aria-labelledby="child-modal-title"
                  aria-describedby="child-modal-description"
                >
                  <Box sx={{ ...style, width: 400 }}>
                    <h2 id="child-modal-title">Đổi mật khẩu thành công</h2>
                    <p id="child-modal-description">
                      Nhấn OK để quay về trang đăng nhập.
                    </p>
                    <Link to='/login'>
                      <Button
                        variant="contained"
                        sx={{ mt: 3, mb: 2, width: 150 }}
                      >
                        OK
                      </Button>
                    </Link>
                  </Box>
                </Modal>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default ChangePassword