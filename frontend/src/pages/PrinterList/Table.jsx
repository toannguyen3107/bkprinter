import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
// import PrintIcon from '@mui/icons-material/Print';
// import PrintDisabledIcon from '@mui/icons-material/PrintDisabled';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import { Link } from 'react-router-dom'

const maxRows = 10;

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, onPageChange } = props;
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / maxRows) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
      </Box>
    );
  }
  

// function isPrintable (pages, state) {
//     if (pages === 0 || state === "Disabling") return <PrintDisabledIcon />;
//     else return (
//         <Link to="/app/print">
//             <PrintIcon />
//         </Link>
//     );
// }

function displayStatus (status){
  if (status == 'Sẵn sàng'){
    return (
      <TableCell align="center" sx={{color: 'green'}}>{status}</TableCell>
    )
  }
  else if (status == 'Đang in'){
    return (
      <TableCell align="center" sx={{color: '#8B8000'}}>{status}</TableCell>
    )
  }
  else if (status == 'Hết giấy'){
    return (
      <TableCell align="center" sx={{color: 'red'}}>{status}</TableCell>
    )
  }
}

export const PrinterTable = ({searchstring, rows}) => {
    const [page, setPage] = React.useState(0);
    // const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const filteredRows = rows.filter((row) => {
      if (searchstring === ''){
        return row;
      }
      else{
        const targetString = row.location.campus + ' - ' + row.location.building + ' - ' + row.location.room;
        return targetString.toLowerCase().includes(searchstring);
      } 
    })
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) - filteredRows.length) : 0;
    if (filteredRows.length < maxRows*(page - 1))
      if (page >= 1) setPage(0);
    return (
      <Paper sx={{
        marginTop: 1,
        backgroundColor: 'white',
        borderRadius: '1rem'
      }}>
        <TableContainer component={Paper} sx={{borderRadius: '1rem', border: '1px solid black', boxShadow: 'none'}}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead sx={{
                  borderBottom: "5px solid #D9D9D9"
                }}>
                <TableRow>
                    <TableCell style={{width: '10%'}}>ID</TableCell>
                    <TableCell align="left" style={{width: 200}}>Name</TableCell>
                    <TableCell align="center" style={{width: 200}}>Location</TableCell>
                    <TableCell align="center" style={{width: 200}}>State</TableCell>
                    <TableCell align="center" style={{width: 200}}>Remaining Page</TableCell>
                    {/* <TableCell align="left"></TableCell> */}
                </TableRow>
                </TableHead>
                <TableBody>
                {(filteredRows.slice(page * maxRows, page * maxRows + maxRows)
                ).map((row) => (
                    <TableRow
                    key={row.printerId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 },
                    '&:hover' : {backgroundColor: '#e6e6e6'},
                    }}
                    >
                    <TableCell component="th" scope="rows">
                        {row.printerId}
                    </TableCell>
                    <TableCell align="left">{row.model}</TableCell>
                    <TableCell align="center">{row.location.campus} - {row.location.building} - {row.location.room}</TableCell>
                    {displayStatus(row.status)}
                    <TableCell align="center">{row.pagesRemaining}</TableCell>
                    {/* <TableCell align="left">{isPrintable(row.pagesRemaining, row.status)}</TableCell> */}
                    </TableRow>
                ))}
                 {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                    </TableRow>
                )} 
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                        colSpan={3}
                        count={filteredRows.length}
                        rowsPerPage={maxRows}
                        page={page}
                        rowsPerPageOptions={[]}
                        onPageChange={handleChangePage}
                        ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
      </Paper>
    )
}