import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  Container,
  DialogTitle,
  Typography,
  DialogContent,
  DialogActions,
  Grid,
  Pagination,
  Stack,
  CircularProgress,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { blue, green, grey, red } from '@mui/material/colors';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';

const styleBtn = {
  fontSize: {
    xs: '0.8rem',
    sm: '1rem',
    md: '1.2rem',
    lg: '1.4rem',
  },
  borderRadius: '2rem',
};

const ChoosePrinter = ({ form }) => {
  // snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbarOpen = () => {
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  // snackbar: end
  const [printerInfo, setPrinterInfo] = useState(null);
  const [sizeItem, setSizeItem] = useState(4);
  const [currPage, setCurrPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(itemsPerPage);

  const itemsPerPageConfig = {
    xs: 1,
    sm: 2,
    md: 6,
    lg: 6,
  };

  const getWidth = () => {
    if (window.innerWidth < 600) {
      return 'xs';
    } else if (window.innerWidth < 900) {
      return 'sm';
    } else if (window.innerWidth < 1200) {
      return 'md';
    } else {
      return 'lg';
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/printers');
        console.log(response.data);
        setPrinterInfo(response.data.printers);
      } catch (error) {
        console.error(error);
      } finally {
        console.log('End load - printers!');
      }
    };

    fetchData();

    const handleResize = () => {
      const screenSize = itemsPerPageConfig[getWidth()];
      setItemsPerPage(screenSize);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setStart((currPage - 1) * itemsPerPage);
    setEnd(currPage * itemsPerPage);
  }, [currPage, itemsPerPage]);

  const handlePageChange = (e, currPage) => {
    setCurrPage(currPage);
  };

  function handleSizePage(abc) {
    // console.log(abc);
    switch (abc) {
      case 1:
        return 12;
      case 2:
        return 6;
      default:
        return 4;
    }
  }

  const [open, setOpen] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedPrinter, setSelectedPrinter] = useState('');

  const handleSelectedPrinter = (e) => {
    setSelectedPrinter(e.currentTarget.value);
  };

  const handleSend = () => {
    const fullForm = {
      layout: form.layout,
      pages: form.pages,
      color: form.color,
      pps: form.pps,
      file: form.file,
      printer: selectedPrinter,
    };

    if (!fullForm.printer) {
      handleSnackbarOpen(); // Show the Snackbar
      return; // Stop further execution
    }
    let formData = new FormData();
    formData.append('layout', fullForm.layout);
    formData.append('pages', fullForm.pages);
    formData.append('color', fullForm.color);
    formData.append('pps', fullForm.pps);
    formData.append('file', fullForm.file);
    formData.append('printer', fullForm.printer);

    
    axios({
      method: 'post',
      url: 'http://localhost:5001/api/printing',
      data: formData,
      headers: {
        Authorization: sessionStorage.getItem('accessToken'),
        'Content-Type': 'multipart/form-data',
      },
      responseType: 'json',
    })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (e) {
        console.error(e);
      });

    // Virtual send data to server
    // console.log(fullForm);
  };


  return (
    <div>
      {printerInfo ? (
        <div>
          <Button variant="outlined" onClick={handleOpen}>
            REOPEN CHOOSE PRINTER
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Container sx={{ bgcolor: 'background.paper' }}>
              <DialogTitle
                sx={{ color: blue[600], textShadow: '-1px 3px 3px black', textAlign: 'center' }}
              >
                Chọn Máy in
              </DialogTitle>
              <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid container spacing={2} sx={{ marginBottom: 3 }}>
                  {printerInfo.slice(start, end).map((printer, idx) => (
                    <Grid item xs={handleSizePage(printerInfo.slice(start, end).length)} key={idx}>
                      <Button
                        variant={selectedPrinter === printer.printerId ? 'contained' : 'outlined'}
                        value={printer.printerId}
                        onClick={handleSelectedPrinter}
                        color={selectedPrinter === printer.printerId ? 'success' : 'primary'}
                        sx={{
                          margin: 'auto',
                          width: '100%',
                          textAlign: 'center',
                        }}
                        disabled={printer.status !== 'Sẵn sàng'}
                      >
                        <Stack spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <LocalPrintshopIcon sx={{ color: blue[300] }} />
                          <Typography variant="h5">Máy in {printer.printerId}</Typography>
                          <Stack direction="row" spacing={1}>
                            <Typography variant="span" color={printer.status === 'Sẵn sàng' ? green[500] : red[500]} fontSize="0.5rem">
                              {printer.status === 'Sẵn sàng' ? 'Sẵn sàng' : printer.status}
                            </Typography>
                            <Typography variant="span" color={grey[800]}>
                              Còn {printer.pagesRemaining} trang
                            </Typography>
                          </Stack>
                        </Stack>
                      </Button>
                    </Grid>
                  ))}
                </Grid>
                <Pagination
                  count={Math.ceil(printerInfo.length / itemsPerPage)}
                  color="primary"
                  sx={{ margin: 'auto' }}
                  onChange={(e, p) => handlePageChange(e, p)}
                />
                <Typography variant="h6">
                  {selectedPrinter ? `Bạn đã chọn: ${selectedPrinter}` : 'Bạn chưa chọn máy in'}
                </Typography>
              </DialogContent>
              <DialogActions sx={{ justifyContent: 'center', gap: 3 }}>
                <Button component={Link} variant="contained" color="error" to="/app" sx={styleBtn}>
                  Hủy
                </Button>
                <Button variant="contained" color="success" sx={styleBtn} onClick={handleSend}>
                  In
                </Button>
              </DialogActions>
            </Container>
          </Dialog>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000} // Adjust the duration as needed
            onClose={handleSnackbarClose}
            message="Bạn chưa chọn máy in!"
          />

        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default ChoosePrinter;
