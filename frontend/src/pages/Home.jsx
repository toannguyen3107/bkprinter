import { useEffect } from 'react'
import React from 'react'
import { Box } from '@mui/material'
import Header from '../component/Header'

const Home = () => {
    useEffect(() => {
        document.title = 'Home | BKPRINTER'
    });
    return (
        <Box sx={{ bgcolor: '#F8F4FC', height: '100vh' }}>
            <Header />
        </Box>
    )
}

export default Home