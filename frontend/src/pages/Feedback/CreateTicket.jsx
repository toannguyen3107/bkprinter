
import FormControl from '@mui/material/FormControl';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { AppBarHeader } from ".";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

export const CreateTicket = () => {
    
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [errorList, setErrorList] = useState([])
    const [selectedFile, setSelectedFile] = useState([]);

    const checkValue = (value, id) => {
        console.log(value)
        if (value === '') {
            if (!errorList.includes(id)) {
                setErrorList([...errorList, id])
            }
        }
        else {
            if (errorList.includes(id)) {
                setErrorList(errorList.filter(e => e != id))
            }
            return false
        }
        return true
    }

    const changeHandler = (event) => {
        const files = event.target.files ? [...event.target.files] : [];
        setSelectedFile(files);
    };

    const handleDelete = (name) => {
        console.log(name)
        setSelectedFile(selectedFile.filter(file => file.name !== name))
    };

    const handleSubmit = () => {
        const valuecheck = checkValue(content, 'outlined-content')
        const contentcheck = checkValue(title, 'outlined-title')
        console.log(valuecheck, contentcheck)
        if (!valuecheck && !contentcheck) {
            if (errorList.length === 0) {
                alert('submit')
                setContent('')
                setTitle('')
                setSelectedFile([])
            }
        }
    }

    return (
        <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1 },
            marginTop: '40px' 
            }}
            noValidate
            autoComplete="off"
            display={'flex'}
            flexDirection={'column'}
      >
        <ButtonGroup variant="text" aria-label="outlined primary button group" style={{margin: '12px 0'}}>
            <Button><Link to={'/app/contact'}>{"Quay lại"}</Link></Button>
            <Button><Link to={'/app/ticket'}>{'Câu hỏi đã tạo'}</Link></Button>
        </ButtonGroup>
        <AppBarHeader title='Tạo câu hỏi'/>
        <FormControl sx={{ width: '50%' }}>
            <TextField
                id="outlined-title"
                label="Chủ đề"
                placeholder="Nhập chủ đề..."
                multiline
                maxRows={3}
                onChange={e => setTitle(e.target.value)}
                error={errorList.includes('outlined-title')}
                helperText={errorList.includes('outlined-title') && "Chủ đề không được trống"}
                onBlur={() => checkValue(title, 'outlined-title')}
                value={title}
            />
            <TextField
                id="outlined-content"
                label="Nội dung"
                placeholder="Nhập nội dung..."
                multiline
                onChange={e => setContent(e.target.value)}
                error={errorList.includes('outlined-content')}
                helperText={errorList.includes('outlined-content') && "Nội dung không được trống"}
                rows={8}
                onBlur={() => checkValue(content, 'outlined-content')}
                value={content}
            />
            <Stack direction="row" spacing={1} flexWrap={'wrap'} maxWidth={'50%'}>
                {
                    selectedFile && selectedFile.map((item, index) => (
                        <Chip label={item.name} variant="outlined" onDelete={()=>handleDelete(item.name)} key={index} style={{margin: '6px 6px'}}/>
                    ))
                }
            </Stack>
            <Box>
                <Button component="label" variant="outlined" startIcon={<CloudUploadIcon />} style={{marginTop: '12px'}}>
                    Upload file
                    <VisuallyHiddenInput type="file" onChange={changeHandler} multiple/>
                </Button>
            </Box>
            <Box sx={{
                marginTop: '20px'
            }}>
                <Button variant="contained"  onClick={handleSubmit}>Gửi câu hỏi</Button>
            </Box>
         </FormControl>
      </Box>
    )
}