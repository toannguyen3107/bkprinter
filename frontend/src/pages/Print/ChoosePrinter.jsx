import React, { useState } from 'react'
import data from './data.json'
import { Button, Dialog, Container, DialogTitle, Typography, DialogContent, DialogActions, Link } from '@mui/material'
import { blue, grey } from '@mui/material/colors'
const sytleBtn = {
  fontSize: {
      xs: '0.8rem',
      sm: '1rem',
      md: '1.2rem',
      lg: '1.4rem',
  },
  borderRadius: '2rem',
}
const ChoosePrinter = () => {
  console.log(data);

  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>REOPEN CONFIG
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Container sx={{ bgcolor: 'background.paper' }}>
          <DialogTitle
            sx={{
              padding: 0
            }}
          >
            <Typography variant="h5" sx={{ color: blue[600], textShadow: '3px 0px 3px black', textAlign: 'center' }}>
              Chọn Máy in
            </Typography>
          </DialogTitle>
          <DialogContent>

          </DialogContent>
          <DialogActions sx={{
            justifyContent: 'center',
            gap: 3
          }}>
            <Button component={Link} variant='contained' color='error' to='/' sx={sytleBtn}>Hủy</Button>
            <Button variant='contained' color='success' sx={sytleBtn}>Next</Button>
          </DialogActions>
        </Container>
      </Dialog>
    </div>
  )
}

export default ChoosePrinter