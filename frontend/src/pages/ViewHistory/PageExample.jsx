import React, {useEffect} from 'react'
import Header from '../../component/Header'
import { Box } from '@mui/material'
const PageExample = () => {
  useEffect(()=>{
    document.title = 'View History | BKPRINTER'
  });
  return (
        <Box sx={{bgcolor: '#F8F4FC', height: '100vh'}}>
            <Header />
        </Box>
  )
}

export default PageExample