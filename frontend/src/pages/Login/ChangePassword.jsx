import * as React from 'react';
import { useState, useRef, useCallback, useEffect } from 'react';
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
import Password from './Password';
import { Alert } from '@mui/material';
import { grey } from "@mui/material/colors";

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

function ChildModal() {
  const [openChild, setOpenChild] = useState(false);
  const handleOpenChild = () => {
    setOpenChild(true);
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        onClick={handleOpenChild}
        variant="contained"
        sx={{ mt: 3, mb: 2, width: 150 }}
      >
        Xác nhận
      </Button>
      <Modal
        open={openChild}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="child-modal-title">Đổi mật khẩu thành công</h2>
          <p id="child-modal-description">
            Nhấn OK để quay về trang đăng nhập.
          </p>
          <Link to='/login_user'>
            <Button
              variant="contained"
              sx={{ mt: 3, mb: 2, width: 150 }}
            >
              OK
            </Button>
          </Link>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

const ChangePassword = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);

  const [passwords, setPasswords] = useState({
    old_password: '',
    new_password: '',
    confirm_password: '',
  });

  const [error, setError] = useState(null);
  //const newPassInputRef = useRef(null);

  // const handlePasswordChange = (name, value) => {
  //   setPasswords((prevPasswords) => ({
  //     ...prevPasswords,
  //     [name]: value,
  //   }));
  //   setError(null)
  // };

  const handleComparePasswords = () => {
    const { old_password, new_password, confirm_password } = passwords;
    console.log(old_password)
    console.log(new_password)
    console.log(confirm_password)
    if (new_password === old_password) {
      setError('Mật khẩu mới không được trùng với mật khẩu cũ.');
    } else if (new_password !== confirm_password) {
      setError('Xác nhận mật khẩu không khớp!');
    } else {
      setError(null);
      setOpenModal(true);
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
            <Password name="old_password" lable="Mật khẩu cũ"/>
            <Password name="new_password" lable="Mật khẩu mới" />
            <Password name="confirm_password" lable="Xác nhận mật khẩu" />
            <Grid container>
              <Grid item xs>
                <Button
                  href='./login_user'
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
                  open={openModal}
                  onClose={handleCloseModal}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography sx={{ mt: 2 }}>
                      Xác nhận thay đổi mật khẩu?
                    </Typography>
                    <ChildModal />
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