import React, {useEffect} from 'react'
import { Box } from '@mui/material'
import Header from '../../component/Header'
import Sidebar from '../../component/Sidebar'
const PageExample = () => {
  useEffect(()=>{
    document.title = 'Print | BKPRINTER'
  });
  const Main = (
    <h1>Hello world</h1>
  ); 
  return (
        <Box sx={{bgcolor: '#F8F4FC', height: '100vh'}}>
            <Header />
            <Sidebar />
        </Box>
  )
}

export default PageExample