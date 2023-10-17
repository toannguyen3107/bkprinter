import React, {useEffect} from 'react'
import { Box } from '@mui/material'
import Header from '../../component/Header'
const PageExample = () => {
  useEffect(()=>{
    document.title = 'View History | BKPRINTER'
  });
  const Main = (
    <h1>Hello world</h1>
  ); 
  return (
        <Box sx={{bgcolor: '#F8F4FC', height: '100vh'}}>
            upload
        </Box>
  )
}

export default PageExample