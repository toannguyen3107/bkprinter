import React, { useState } from 'react'
import { Modal, Button, Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { grey, blue, red } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    height: '80vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Config = () => {
    const [openModal, setOpenModal] = useState(true);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    return (
        <div>
            <Button variant='contained' onClick={handleOpen} >Reopen Config</Button>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box component='div' sx={style}>
                    <Container sx={
                        {
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            background: grey[700]
                        }
                    }>
                        <Typography variant='h5' sx={{ color: blue[600], textShadow: '3px 0px 3px black' }} >Thiết Lập Thông Số In</Typography>
                        <CloseIcon
                            sx={{
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                color: red[500],
                                fontSize: '2rem',
                                cursor: 'pointer', // Add cursor pointer to make it clickable
                            }}
                            onClick={handleClose} // Add this onClick handler to close the modal
                        />

                    </Container>

                </Box>
            </Modal>
        </div >
    )
}

export default Config