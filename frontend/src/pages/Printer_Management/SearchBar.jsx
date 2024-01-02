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
import axios from 'axios';
import {CircularProgress} from '@mui/material';
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

export const SearchBar = () => {
  const [printersInfo, setPrintersInfo] = React.useState(null)
  
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/printers');
        console.log(response.data);
        setPrintersInfo(response.data.printers);
      } catch (error) {
        console.error(error);
      } finally {
        console.log('End load - printers!');
      }
    };
  
    fetchData();
  }, []);
  const [searched, setSearched] = React.useState("");
  const [status, setStatus] = React.useState("Off")

  // function getPrinters(callback) {
  //   fetch(printerApi)
  //     .then(response => response.json())
  //     .then(callback)
  // }

  // getPrinters(function(printers) {
  //   console.log(printers)
  // }) 

  function createPrinter(data) {
    // var options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data)
    // }
    // fetch(printerApi, options)
    //   .then(response => response.json())
    //   .then(callback)
    axios
      .post("http://localhost:5001/api/printers/", data)
      .then((response) => {
          console.log(response.data)
      })
      .catch((err) => {
          console.error(err);
      });
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
    var id = String(document.querySelector("input[name='id']").value)
    var make = document.querySelector("input[name='make']").value
    var model = document.querySelector("input[name='model']").value
    var campus = document.querySelector("select[name='campus']").value
    var building = document.querySelector("input[name='building']").value
    var room = document.querySelector("input[name='room']").value
    var remainingPage = document.querySelector("input[name='remainingPage']").value
    var state = (status === "On") ? ((remainingPage == 0) ? "Hết giấy" : "Sẵn sàng") : "Đang tắt"

    var printerData = {
      printerId: id,
      make: make,
      model: model,
      location: {
        "campus": campus,
        "building": building,
        "room": room  
      },
      status: state,
      pagesRemaining: remainingPage
    }  
    createPrinter(printerData)
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
                    Nhà sản xuất:
                  </Grid>
                  <Grid item xs={8} sx={{display: 'flex'}}>
                    <input type="text" style={{width: '100%'}} name='make'/>
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{mt: 1}}>
                  <Grid item xs={4} sx={{display: 'flex', fontWeight: 'Bold'}}>
                    Kiểu máy in:
                  </Grid>
                  <Grid item xs={8} sx={{display: 'flex'}}>
                    <input type="text" style={{width: '100%'}} name='model'/>
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{mt: 1}}>
                  <Grid item xs={2} sx={{display: 'flex', fontWeight: 'Bold'}}>
                    Vị trí:
                  </Grid>
                  <Grid item xs={10} sx={{display: 'flex'}}>
                    <Grid item xs={4}>
                      <div style={{textAlign: 'left'}}>
                        Cơ sở:
                      </div> 
                      <select name="campus" id="campus" style={{width: '100px', textAlign: 'left'}}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                      </select>
                    </Grid>
                    <Grid item xs={4}>
                      <div style={{textAlign: 'left'}}>
                        Tòa:
                      </div> 
                      <input type="text" style={{width: '100px', display: "flex"}} name="building"/>
                    </Grid>
                    <Grid item xs={4}>
                      <div style={{textAlign: 'left'}}>
                        Phòng:
                      </div>
                      <input type="text" style={{width: '100px', display: 'flex'}} name="room"/>
                    </Grid>
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
                    onClick={openFirstModal}
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
      {printersInfo ? (<PrinterTable searchstring={searched} rows={printersInfo}/>) : (<CircularProgress />)}
    </Box>
  );
}