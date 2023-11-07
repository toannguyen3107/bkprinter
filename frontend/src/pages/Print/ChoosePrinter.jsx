import React, { useState, useEffect } from 'react'
import data from './data.json'
import { Button, Dialog, Container, DialogTitle, Typography, DialogContent, DialogActions, Grid, Pagination, Stack, Snackbar } from '@mui/material'
import { Link } from 'react-router-dom'
import { blue, green, grey, red } from '@mui/material/colors'
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

const styleBtn = {
  fontSize: {
    xs: '0.8rem',
    sm: '1rem',
    md: '1.2rem',
    lg: '1.4rem',
  },
  borderRadius: '2rem',
}
const ChoosePrinter = ({ form }) => {

  const [currPage, setCurrPage] = useState(1);

  const itemsPerPageConfig = {
    xs: 1,
    sm: 2,
    md: 6,
    lg: 6,
  };
  function getWidth() {
    if (window.innerWidth < 600) {
      return 'xs';
    } else if (window.innerWidth < 900) {
      return 'sm';
    } else if (window.innerWidth < 1200) {
      return 'md';
    } else {
      return 'lg';
    }
  }
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageConfig[getWidth()]);

  useEffect(() => {
    const handleResize = () => {
      const screenSize = itemsPerPageConfig[getWidth()];
      setItemsPerPage(screenSize);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePageChange = (e, currPage) => {
    setCurrPage(currPage);
  }
  const start = (currPage - 1) * itemsPerPage;
  const end = (start) + itemsPerPage;

  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedPrinter, setSelectedPrinter] = useState(String(''));

  const handleSelectedPrinter = (e) => {
    setSelectedPrinter(e.currentTarget.value);
  }

  const handleSend = () => {
    const fullForm = {
      layout: form.layout,
      pages: form.pages,
      color: form.color,
      pps: form.pps,
      file: form.file,
      printer: selectedPrinter
    }
    //virtual send data to server
    console.log(fullForm)
  }
  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>REOPEN CHOOSE PRINTER
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
          <DialogContent
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Grid container spacing={2}
              sx={{
                marginBottom: 3
              }}>
              {
                data.slice(start, end).map((printer, idx) => (
                  <Grid item xs={12} sm={6} md={4} key={idx}

                  >
                    <Button
                      variant={selectedPrinter === printer.name ? 'contained' : 'outlined'}
                      value={printer.name}
                      onClick={handleSelectedPrinter}
                      color={selectedPrinter === printer.name ? 'success' : 'primary'}
                      sx={{
                        margin: 'auto',
                        width: '100%',
                        textAlign: 'center',
                      }}
                      disabled={printer.status === false}
                    >
                      <Stack spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <LocalPrintshopIcon sx={{ color: blue[300] }} />
                        <Typography variant='h5'>{printer.name}</Typography>
                        <Typography variant='span' color={grey[400]}>Có {printer.queryPeople} đang đợi</Typography>
                        <Stack direction={'row'} spacing={1} >
                          <Typography variant='span' color={printer.status === true ? green[500] : red[500]} fontSize={'0.5rem'}>{printer.status === true ? 'Sẳn sàng' : 'Đang bận'}</Typography>
                          <Typography variant='span' color={grey[800]}>Còn {printer.page} trang</Typography>
                        </Stack>
                      </Stack>
                    </Button>
                  </Grid>
                ))
              }

            </Grid>
            <Pagination count={Math.ceil(data.length / itemsPerPage)} color="primary" sx={{
              margin: 'auto',
            }} onChange={(e, p) => handlePageChange(e, p)} />

            <Typography variant='h6'>{selectedPrinter ? `Bạn đã chọn: ${selectedPrinter}` : 'Bạn chưa chọn máy in'}</Typography>
          </DialogContent>
          <DialogActions sx={{
            justifyContent: 'center',
            gap: 3
          }}>
            <Button component={Link} variant='contained' color='error' to='/' sx={styleBtn}>Hủy</Button>
            <Button variant='contained' color='success' sx={styleBtn} onClick={() => { handleSend; }}>In</Button>

          </DialogActions>
        </Container>
      </Dialog>
    </div>
  )
}

export default ChoosePrinter