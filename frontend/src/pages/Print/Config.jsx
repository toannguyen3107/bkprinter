import React, { useState, useEffect } from 'react';
import {
    Select,
    Button,
    Box,
    Container,
    Radio,
    FormLabel,
    FormControl,
    RadioGroup,
    FormControlLabel,
    TextField,
    InputLabel,
    MenuItem,
} from '@mui/material';
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import { grey, blue, red } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ChoosePrinter from './ChoosePrinter';



const styleSize = {
    fontSize: {
        xs: '1rem',
        sm: '1.2rem',
        md: '1.4rem',
        lg: '1.6rem',
    },
};
const sytleBtn = {
    fontSize: {
        xs: '0.8rem',
        sm: '1rem',
        md: '1.2rem',
        lg: '1.4rem',
    },
    borderRadius: '2rem',
}
const Config = ({ file }) => {
    console.log(file);
    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [next, setNext] = useState(false);
    const [inputs, setInputs] = useState("");
    const onChangeInput = function (e) {
        const tgr = e.target.value;
        setInputs(tgr);
    };

    const [selectedLayout, setSelectedLayout] = useState('horizontal');
    const [selectedPages, setSelectedPages] = useState('allpage');
    const [selectedColor, setSelectedCorlor] = useState('no');
    const [selectedPPS, setSelectedPPS] = useState('one');

    const handleNext = ({ file }) => {
        setNext(true);


        // // process send to server
        // console.log(sendForm);
    }
    const sendForm = {
        layout: selectedLayout,
        pages: selectedPages,
        color: selectedColor,
        pps: selectedPPS,
        file: file
    }

    return (
        (
            next === false
        ) ? (
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
                                padding: 0,
                                color: blue[600],
                                textShadow: '3px 0px 3px black',
                                textAlign: 'center'
                            }}
                        >
                            Thiết Lập Thông Số In
                        </DialogTitle>
                        <DialogContent>
                            <Container>
                                <Container
                                    sx={{
                                        marginTop: {
                                            xs: 4,
                                            sm: 2
                                        },
                                    }}>
                                    {/* layout */}
                                    {/* layout */}
                                    <FormControl
                                        sx={{
                                            display: {
                                                xs: 'block',
                                                md: 'flex'
                                            },
                                            flexDirection: 'row',
                                            gap: 3
                                        }}
                                    >
                                        <FormLabel id='layoutPage' sx={{
                                            fontSize: {
                                                xs: '1rem',
                                                sm: '1.2rem',
                                                md: '1.4rem',
                                                lg: '1.8rem'
                                            },
                                            color: grey[900]
                                        }}>Layout:</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby='layoutPage'
                                            value={selectedLayout}
                                            onChange={e => setSelectedLayout(e.target.value)}
                                            name='radio-button-group'
                                        >
                                            <FormControlLabel value='horizontal' control={<Radio />} label='In Ngang' />
                                            <FormControlLabel value='vertical' control={<Radio />} label='In Dọc' />
                                        </RadioGroup>
                                    </FormControl>

                                    {/* pages */}
                                    <FormControl
                                        sx={{
                                            display: {
                                                xs: 'block',
                                                md: 'flex'
                                            },
                                            flexDirection: 'row',
                                            gap: 3
                                        }}
                                    >
                                        <FormLabel id='pages' sx={{
                                            fontSize: {
                                                xs: '1rem',
                                                sm: '1.2rem',
                                                md: '1.4rem',
                                                lg: '1.8rem'
                                            },
                                            color: grey[900]
                                        }}>Pages:</FormLabel>
                                        <RadioGroup
                                            aria-labelledby='pages'
                                            value={selectedPages}
                                            onChange={(e) => setSelectedPages(e.target.value)}
                                            name='radio-buttons-group'
                                        >
                                            <FormControlLabel value='allpage' control={<Radio />} label='All' />
                                            <FormControlLabel value='oddpage' control={<Radio />} label='Trang lẻ' />
                                            <FormControlLabel value='evenpage' control={<Radio />} label='Trang chăn' />
                                            <FormControlLabel
                                                value="otherpage"
                                                control={<Radio />}
                                                label={
                                                    <TextField
                                                        sx={{
                                                            bgcolor: '#B9B4B4'
                                                        }}
                                                        label="e.g. 1-5,8,11-12"
                                                        value={inputs}
                                                        onChange={onChangeInput}
                                                        disabled={selectedPages !== 'otherpage'}
                                                    />
                                                }
                                            />
                                        </RadioGroup>
                                    </FormControl>

                                    {/* color */}
                                    <FormControl
                                        sx={{
                                            display: {
                                                xs: 'block',
                                                md: 'flex'
                                            },
                                            flexDirection: 'row',
                                            gap: 3
                                        }}
                                    >
                                        <FormLabel id='colorPage' sx={{
                                            fontSize: {
                                                xs: '1rem',
                                                sm: '1.2rem',
                                                md: '1.4rem',
                                                lg: '1.8rem'
                                            },
                                            color: grey[900]
                                        }}>Color:</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby='colorPage'
                                            value={selectedColor}
                                            onChange={e => setSelectedCorlor(e.target.value)}
                                            name='radio-button-group'
                                        >
                                            <FormControlLabel value='have' control={<Radio />} label='Có màu' />
                                            <FormControlLabel value='no' control={<Radio />} label='Trắng & đen' />
                                        </RadioGroup>
                                    </FormControl>

                                    {/* page per sheet */}
                                    <FormControl
                                        sx={{
                                            display: {
                                                xs: 'block',
                                                md: 'flex'
                                            },
                                            flexDirection: 'row',
                                            gap: 6
                                        }}
                                    >
                                        <FormLabel id='pps'
                                            sx={{
                                                fontSize: {
                                                    xs: '1rem',
                                                    sm: '1.2rem',
                                                    md: '1.4rem',
                                                    lg: '1.8rem'
                                                },
                                                color: grey[900]
                                            }}
                                        >Pages per sheet:</FormLabel>
                                        <Select
                                            id="pps"
                                            value={selectedPPS}
                                            label="Age"
                                            onChange={e => setSelectedPPS(e.target.value)}
                                            defaultValue={selectedPPS}
                                            sx={{
                                                width: {
                                                    xs: '100px',
                                                    sm: '200px'
                                                }
                                            }}
                                        >
                                            <MenuItem value='one' sx={styleSize} >1</MenuItem>
                                            <MenuItem value='two' sx={styleSize}>2</MenuItem>
                                            <MenuItem value='four' sx={styleSize}>4</MenuItem>
                                        </Select>
                                    </FormControl>


                                </Container>
                            </Container>
                        </DialogContent>
                        <DialogActions sx={{
                            justifyContent: 'center',
                            gap: 3
                        }}>
                            <Button component={Link} variant='contained' color='error' to='/' sx={sytleBtn}>Hủy</Button>
                            <Button variant='contained' color='success' sx={sytleBtn} onClick={handleNext}>Next</Button>
                        </DialogActions>
                    </Container>

                </Dialog>
            </div>
        ) : (
            <ChoosePrinter form={sendForm} />
        )


    );
};

export default Config;
