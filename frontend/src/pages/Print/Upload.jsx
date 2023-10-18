import React, {useEffect} from 'react'
import { Box } from '@mui/material'
import Header from '../../component/Header'
import MyDropzone from './DragDrop'
const PageExample = () => {
  useEffect(()=>{
    document.title = 'Print | BKPRINTER'
  });
  const Main = (
    <h1>Hello world</h1>
  ); 
  return (
      <MyDropzone />
  )
}

export default PageExample