import React, {useEffect} from 'react'
import { Box } from '@mui/material'
import Header from '../../component/Header'
const PageExample = () => {
  useEffect(()=>{
    document.title = 'Print | BKPRINTER'
  });
  const Main = (
    <h1>Hello world</h1>
  ); 
  return (
      <div>upload</div>
  )
}

export default PageExample