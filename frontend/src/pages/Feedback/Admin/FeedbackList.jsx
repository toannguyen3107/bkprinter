import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
// import {useState} from 'react'

import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
// import TableFooter from '@mui/material/TableFooter';
// import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import axios from 'axios'
import TableHead from '@mui/material/TableHead';



function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    );
  }
  
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };
  
  // function createData(name, calories, fat) {
  //   return { name, calories, fat };
  // }
  
  // const rows = [
  //   createData('Cupcake', 305, 3.7),
  //   createData('Donut', 452, 25.0),
  //   createData('Eclair', 262, 16.0),
  //   createData('Frozen yoghurt', 159, 6.0),
  //   createData('Gingerbread', 356, 16.0),
  //   createData('Honeycomb', 408, 3.2),
  //   createData('Ice cream sandwich', 237, 9.0),
  //   createData('Jelly Bean', 375, 0.0),
  //   createData('KitKat', 518, 26.0),
  //   createData('Lollipop', 392, 0.2),
  //   createData('Marshmallow', 318, 0),
  //   createData('Nougat', 360, 19.0),
  //   createData('Oreo', 437, 18.0),
  // ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export const FeedbackListShow = () => {

    // const [page, setPage] = useState(0);
    // const [rowsPerPage, setRowsPerPage] = useState(5);
  
    // const emptyRows =
    //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  
    // const handleChangePage = (event, newPage) => {
    //   setPage(newPage);
    // };
  
    // const handleChangeRowsPerPage = (event) => {
    //   setRowsPerPage(parseInt(event.target.value, 10));
    //   setPage(0);
    // };

    const [feedbacks, setFeedbacks] = useState(null)

    const [loading, setLoading] = useState(true)

    const cleanString = (input) => {
      console.log(input)
      const step1 = input.replace(/<p><br><\/p>/g, '');
      const step2 = step1.replace(/<\/p><p>/g, ' ');
    
      return step2;
    };

    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };

    const getDay = (date) => {

      console.log(date)
      return new Date(date).toLocaleDateString('en-US', options);

    }

    useEffect(() => {
      axios({
        method: 'get',
        url: 'http://localhost:5001/api/feedback/all',
        headers: {
          Authorization: sessionStorage.getItem('accessToken'),
          'Content-Type': 'application/json',
        },
        responseType: 'json',
      })
        .then(function (response) {
          setFeedbacks(response.data.feedbacks)
          setLoading(false)

        })
        .catch(function () {
          console.log('false')
        });
      
    }, [])

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
        {
          loading ? 
                    <div style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: 20
                    }}>
                      Hiện tại chưa có câu hỏi nào
                    </div>
                  :
        
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="left">Người gửi</TableCell>
                        <TableCell align="left">Tiêu đề</TableCell>
                        <TableCell align="left">Nội dung</TableCell>
                        <TableCell align="left">Thời gian</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                  feedbacks && feedbacks.map((row) => (
                      
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            component='a'
                            href={`adminFeedback/${row._id}`}
                        >
                        
                            <TableCell component="th" scope="row" sx={{width: '20px'}}>
                                {row._id}
                            </TableCell>
                            <TableCell align="left"  sx={{width: '200px'}}>{row.user.firstName + ' ' + row.user.lastName}</TableCell>
                            <TableCell align="left"  sx={{width: '200px'}}>
                              <span                               
                                  style={{
                                  display: '-webkit-box',
                                  WebkitBoxOrient: 'vertical',
                                  overflow: 'hidden',
                                  WebkitLineClamp: 1,
                                  }} 
                                >
                                    {
                                      parse(cleanString(row.title)) 
                                    }
                              </span>
                            </TableCell>
                            <TableCell align="left" >
                              <span                               
                                style={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                WebkitLineClamp: 1,
                                }} 
                              >
                                  {
                                    parse(cleanString(row.value)) 
                                  }
                            </span>
                            </TableCell>
                            <TableCell align="right">{getDay(row.createdAt)}</TableCell>
                        </TableRow>
                ))}
                {/* {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                    </TableRow>
                )} */}
                </TableBody>
            </Table>
            {/* <TableFooter style={{flex: '1', display: 'flex', justifyContent: 'flex-end'}}>
                    <TableRow >
                        <TablePagination
                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                        colSpan={3}
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                            inputProps: {
                            'aria-label': 'rows per page',
                            },
                            native: true,
                        }}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter> */}
        </TableContainer>
        }
      </Box>
    )
}