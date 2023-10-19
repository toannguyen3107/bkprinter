import { ClassNames } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { grey, red, blue } from '@mui/material/colors';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Preview from './Preview';

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

export default function DropzoneWithoutClick(props) {
    const [openModal, setOpenModal] = useState(true);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const [next, setNext] = useState(false);
    const handleNext = () => { setNext(true); }
    const { getRootProps, getInputProps, acceptedFiles, open } = useDropzone({ noClick: true, noKeyboard: true });
    const files = acceptedFiles.map(file => <li key={file.path}>{file.path} - {file.size}</li>);

    return (
        next === false ?
            (
                <div>
                    <Button variant='contained' onClick={handleOpen} >Upload</Button>
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
                                <Typography variant='h5' sx={{ color: blue[600], textShadow: '3px 0px 3px black' }} >Tải tài liệu</Typography>
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
                                            <Typography variant='p' sx={{
                                                fontSize: {
                                                    xs: '1rem',
                                                    md: '1.5rem'
                                                },
                                                textAlign: 'center'
                                            }}>Kéo thả tài liệu hoặc nhấn nút <i><u style={{
                                                color: 'blue', fontSize: {
                                                    xs: '1rem',
                                                    md: '1.5rem'
                                                }
                                            }}>{acceptedFiles[0].path}</u></i> để tải tài liệu</Typography>
                                        ) :
                                        (<Typography variant='p' sx={{
                                            fontSize: {
                                                xs: '1.5rem',
                                                md: '2rem'
                                            },
                                            textAlign: 'center'
                                        }}>Kéo thả tài liệu hoặc nhấn nút <i><u>upload file</u></i> để tải tài liệu</Typography>)
                                    }


                                </div>
                                <Button component="label" variant="contained" color={acceptedFiles.length > 0 ? 'success' : 'primary'}
                                    startIcon={acceptedFiles.length > 0 ? <ArrowForwardIosIcon /> : <CloudUploadIcon />}
                                    sx={{
                                        borderRadius: '20px',
                                    }}
                                    onClick={acceptedFiles.length > 0 ? handleNext : open}
                                >
                                    {acceptedFiles.length > 0 ? "Next" : "Upload File"}
                                </Button>
                                <Container component={'aside'} sx={{
                                    position: 'relative',
                                    display: {
                                        xs: 'none',
                                        md: 'block'
                                    },
                                    padding: '3px'
                                }}>
                                    <h4>Files</h4>
                                    <ul>{files}</ul>
                                </Container>
                            </Box>
                        </Box>
                    </Modal>
                </div >
            ) : (
                <Preview file={acceptedFiles[0]} />
            )
    )
}