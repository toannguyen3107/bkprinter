import { ClassNames } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { grey, red, blue } from '@mui/material/colors';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    height: '50vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const ModalAct = () => {
    const [openModal, setOpenModal] = useState(true);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    return (
        <div>
            <Button variant='contained' onClick={handleOpen}>Upload</Button>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} component={'div'}>
                    <Container sx={
                        {
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            background: grey[700]
                        }
                    }>
                        <Typography variant='h5' sx={{color: blue[600]}} >Tải tài liệu</Typography>
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
                    <DropzoneWithoutClick />
                </Box>
            </Modal>
        </div>
    );
}

function DropzoneWithoutClick(props) {
    const { getRootProps, getInputProps, acceptedFiles, open } = useDropzone({ noClick: true, noKeyboard: true });
    const files = acceptedFiles.map(file => <li key={file.path}>{file.path} - {file.size}</li>);
    return (
        <Box component={'div'}
            sx={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }
            }>
            <div {...getRootProps({ className: 'dropzone' })}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px dashed blue',
                    width: '100%',
                    height: '30vh',
                    padding: '20px',
                    marginBottom: '5px',
                    marginTop: '20px',
                }}
            >
                <input {...getInputProps()} />
                {(acceptedFiles.length > 0) ?
                    (
                        <p style={{
                            fontSize: '2rem',
                        }}>Kéo thả tài liệu hoặc nhấn nút <i><u style={{ color: 'blue', fontSize: '1.8rem' }}>{acceptedFiles[0].path}</u></i> để tải tài liệu</p>
                    ) :
                    (<p style={{
                        fontSize: '2rem',
                    }}>Kéo thả tài liệu hoặc nhấn nút <i><u>upload file</u></i> để tải tài liệu</p>)
                }


            </div>
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}
                sx={{ borderRadius: '20px' }} onClick={open}
            >
                Upload file
            </Button>
            <aside style={{
                position: 'absolute',
                left: '0',
                bottom: '10%',
                marginLeft: '2rem'
            }}>
                <h4>Files</h4>
                <ul>{files}</ul>
            </aside>
        </Box>
    )
}
export default function DrapDrop() {

    return (
        <ModalAct></ModalAct>
    );
}