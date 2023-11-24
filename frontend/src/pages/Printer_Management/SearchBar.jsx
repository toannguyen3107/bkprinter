import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Modal, Grid } from '@mui/material';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import data from "./data.json";
import { PrinterTable } from "./Table";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '22ch',
      '&:focus': {
        width: '32ch',
      },
    },
  },
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4, 
  textAlign: 'center'
};

const printerApi = "http://localhost:3001/Printers"

export const SearchBar = () => {
  const [rows, setRows] = React.useState(data["Printers"]);
  const [searched, setSearched] = React.useState("");
  const [status, setStatus] = React.useState("Off")

  function getPrinters(callback) {
    fetch(printerApi)
      .then(response => response.json())
      .then(callback)
  }

  getPrinters(function(printers) {
    console.log(printers)
  }) 

  function handleAdd() {
    var id = document.querySelector("input[name='id']").value
    var name = document.querySelector("input[name='name']").value
    var location = document.querySelector("input[name='location']").value
    var remainingPage = document.querySelector("input[name='remainingPage']").value
    var state = status

    var printerData = {
      id: id,
      name: name,
      location: location,
      state: state,
      remainingPage: remainingPage
    }  
    createPrinter(printerData)
    openFirstModal()
  }

  function createPrinter(data, callback) {
    var options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }
    fetch(printerApi, options)
      .then(response => response.json())
      .then(callback)
  } 

  function PrinterStatus() {
    if (status === "On") {
      return (
        <ToggleOnIcon 
          sx={{
            width: 50,
            height: 50
          }}
          color='success' 
          onClick={() => {
            setStatus("Off")
          }}
        />
      )
    } else {
      return (
        <ToggleOffIcon
          sx={{
            height: 50, 
            width: 50,
          }} 
          color='error' 
          onClick={() => {
            setStatus("On")
          }}/>
      )  
    }
  }

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearched(e.target.value.toLowerCase());
  }

  const [openModal, setOpenModal] = React.useState(false)
  const handleOpenModal = () => {
    setOpenModal(true);
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const [firstModal, setFirstModal] = React.useState(false);
  const [secondModal, setSecondModal] = React.useState(false);
  const openFirstModal = () => {
    setFirstModal(true);
  };

  const closeFirstModal = () => {
    setFirstModal(false);
  };

  const openSecondModal = () => {
    setSecondModal(true);
  };

  const closeSecondModal = () => {
    setSecondModal(false);
  };

  const handleAddPrinter = () => {
    closeFirstModal()
    openSecondModal()
  }

  return (
    <Box sx={{ 
        flexGrow: 1
    }}>
      <AppBar position="static">
        <Toolbar sx={{
            backgroundColor: "white"
        }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ 
                flexGrow: 1, 
                display: { xs: 'none', sm: 'block' },
                color: "black"
            }}
          >
            DANH SÁCH MÁY IN
          </Typography>
          <div>
            <Button
              variant='contained'
              onClick={handleOpenModal}
            >
              Thêm máy in  
            </Button> 
            <Modal
              open={openModal}
              onClose={handleCloseModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={{...style, width: 500}}>
                <h2>Thêm máy in</h2>
                <Grid container spacing={2} sx={{mt: 1}}>
                  <Grid item xs={4} sx={{display: 'flex', fontWeight: 'Bold'}}>
                    ID máy in:
                  </Grid>
                  <Grid item xs={8} sx={{display: 'flex'}}>
                    <input type="number" style={{width: '100%'}} name='id'/>
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{mt: 1}}>
                  <Grid item xs={4} sx={{display: 'flex', fontWeight: 'Bold'}}>
                    Tên máy in:
                  </Grid>
                  <Grid item xs={8} sx={{display: 'flex'}}>
                    <input type="text" style={{width: '100%'}} name='name'/>
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{mt: 1}}>
                  <Grid item xs={4} sx={{display: 'flex', fontWeight: 'Bold'}}>
                    Vị trí:
                  </Grid>
                  <Grid item xs={8} sx={{display: 'flex'}}>
                    <input type="text" style={{width: '100%'}} name='location'/>
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{mt: 1}}>
                  <Grid item xs={4} sx={{display: 'flex', fontWeight: 'Bold'}}>
                    Số giấy còn lại:
                  </Grid>
                  <Grid item xs={8} sx={{display: 'flex'}}>
                    <input type="number" style={{width: '100%'}} name='remainingPage'/>
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{mt: 1}}>
                  <Grid item xs={4} sx={{display: 'flex', fontWeight: 'Bold'}}>
                    <p style={{height: 50, paddingTop: 13}}>Trạng thái:</p>
                  </Grid>
                  <Grid item xs={8} sx={{display: 'flex'}}>
                    {PrinterStatus()}
                  </Grid>
                </Grid>
                <div>
                  <Button
                    onClick={handleCloseModal}
                    variant="outlined"
                    sx={{ mt: 3, mb: 2, mr: 5, width: 100 }}
                  >
                    Hủy
                  </Button>
                  <Button
                    onClick={handleAdd}
                    variant="contained"
                    sx={{ mt: 3, mb: 2, ml: 5, width: 100 }}
                  >
                    Thêm
                  </Button>
                  <Modal
                      open={firstModal}
                      onClose={closeFirstModal}
                      aria-labelledby="first-modal-modal-title"
                      aria-describedby="first-modal-modal-description"
                  >
                      <Box sx={style}>
                          <Typography sx={{ mt: 2 }}>
                              Xác nhận thêm máy in?
                          </Typography>
                          <Button
                            onClick={closeFirstModal}
                            variant="outlined"
                            sx={{ mt: 3, mb: 2, mr: 2, width: 100 }}
                          >
                            Hủy
                          </Button>
                          <Button
                            onClick={handleAddPrinter}
                            variant="contained"
                            sx={{ mt: 3, mb: 2, ml: 2, width: 100 }}
                          >
                            Thêm
                          </Button>
                      </Box>
                  </Modal>
                  <Modal
                    open={secondModal}
                    onClose={closeSecondModal}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                  >
                    <Box sx={{ ...style, width: 400 }}>
                      <p id="child-modal-description">
                        Thêm máy in thành công!
                      </p>
                      <Button
                        onClick={closeSecondModal}
                        variant="contained"
                        sx={{ mt: 3, mb: 2, width: 150 }}
                      >
                        OK
                      </Button>
                    </Box>
                  </Modal>
                </div>
              </Box>
            </Modal>
          </div>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Tìm máy in… (theo địa chỉ)"
              inputProps={{ 'aria-label': 'search' }}
              onSelect={handleInput}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <PrinterTable searchstring={searched} rows={rows}/>
    </Box>
  );
}