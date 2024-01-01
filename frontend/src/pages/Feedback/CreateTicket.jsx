
import FormControl from '@mui/material/FormControl';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { AppBarHeader } from ".";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import axios from 'axios';

export const CreateTicket = () => {
    
    const [title, setTitle] = useState('')
    const [errorList, setErrorList] = useState([])
    const [value, setValue] = useState('')

    const checkValue = (value, id) => {
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


    const handleSubmit = async () => {
        const valuecheck = checkValue(value, 'outlined-content')
        const contentcheck = checkValue(title, 'outlined-title')
        if (!valuecheck && !contentcheck) {
            if (errorList.length === 0) {
                // await axios.post('http://localhost:5001/api/feedback', {
                //     title, value
                // });
                // setValue('')
                // setTitle('')
                axios({
                    method: 'post',
                    url: 'http://localhost:5001/api/feedback',
                    data: {title, value},
                    headers: {
                      Authorization: sessionStorage.getItem('accessToken'),
                      'Content-Type': 'application/json',
                    },
                    responseType: 'json',
                  })
                    .then(function (response) {
                      console.log(response.data);
              
                      // Redirect to /app after 2000 milliseconds (2 seconds)
                      setTimeout(() => {
                        window.location.reload();
                      }, 2000);
                    })
                    .catch(function () {
                      console.log('false')
                    });
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
        <ButtonGroup variant="text" aria-label="outlined primary button group" style={{margin: '0px 0'}}>
            <Button><Link to={'/app/contact'}>{"Quay lại"}</Link></Button>
            <Button><Link to={'/app/ticket'}>{'Câu hỏi đã tạo'}</Link></Button>
        </ButtonGroup>
        <AppBarHeader title='Tạo câu hỏi'/>
        <FormControl sx={{ width: '100%' }}>
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
            <div style={{margin: '8px'}}>
                <ReactQuill
                    theme='snow'
                    value={value}
                    onChange={(e) => setValue(e)}
                />
                <div>{value}</div>
            </div>
            <Box sx={{
                marginTop: '20px'
            }}>
                <Button variant="contained"  onClick={handleSubmit}>Gửi câu hỏi</Button>
            </Box>
         </FormControl>
      </Box>
    )
}