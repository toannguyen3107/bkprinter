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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Modal, Typography, Button } from '@mui/material';
import EditInfoPrinter from '../Edit_info_printer/edit_info'
import { Link } from 'react-router-dom'
import EditInfoPrinterrr from '../Edit_info_printer/homeHeader';
import axios from 'axios';
import {CircularProgress} from '@mui/material';

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
  
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4, 
  textAlign: 'center'
};





function PrinterStatus(props) {
  const [state, setState] = React.useState(props.status)
  const handleReadyPrinter = () => {
    setState("Sẵn sàng")
  }
  const handleNoPagePrinter = () => {
    setState("Hết giấy")
  }
  const handleEnablePrinter = () => {
    if (props.remainingPage === 0) handleNoPagePrinter()
    else handleReadyPrinter()
  }
  const handleDisablePrinter = () => {
    setState("Đang tắt")
  }
  if (state === "Đang tắt") {
    return (
      <ToggleOffIcon color='error' onClick={handleEnablePrinter}/>
    )
  } else {
    return (
      <ToggleOnIcon color='success' onClick={handleDisablePrinter}/>
    )  
  }
}
function EditPrinter(props){
  //console.log(data.Printers[id]);
  return (
    <EditIcon onClick={() => window.location.href = `/app/edit_printer?id=${props.id}`} />
  );
  
  
}
function DeletePrinter(props) {
    const [firstModal, setFirstModal] = React.useState(false);
    const [secondModal, setSecondModal] = React.useState(false);
    const openFirstModal = () => {
      setFirstModal(true);
    };

    const closeFirstModal = () => {
      setFirstModal(false);
    };

    const openSecondModal = () => {
      setSecondModal(true);
    };

    const closeSecondModal = () => {
      setSecondModal(false);
    };
    
    const handleDeletePrinter = () => {
      axios
        .delete(`http://localhost:5001/api/printers/${props.id}`)
        .then(response => {
          console.log(`Deleted printer with ID ${props.id}`);
        })
        .catch(error => {
          console.error(error);
        });
    }

    const handleDelete = () => {
      closeFirstModal()
      openSecondModal()
      handleDeletePrinter()
    }
    return (
        <div>
            <DeleteIcon onClick={openFirstModal} sx={{cursor: "pointer"}}/>
            <Modal
                open={firstModal}
                onClose={closeFirstModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography sx={{ mt: 2 }}>
                        Bạn muốn xóa máy in số {props.id} chứ?
                    </Typography>
                    <Button
                      onClick={closeFirstModal}
                      variant="outlined"
                      sx={{ mt: 3, mb: 2, mr: 2, width: 100 }}
                    >
                      Hủy
                    </Button>
                    <Button
                      onClick={handleDelete}
                      variant="contained"
                      sx={{ mt: 3, mb: 2, ml: 2, width: 100 }}
                    >
                      Xóa
                    </Button>
                </Box>
            </Modal>
            <Modal
              open={secondModal}
              onClose={closeSecondModal}
              aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"
            >
              <Box sx={{ ...style, width: 400 }}>
                <p id="child-modal-description">
                  Máy in số {props.id} đã được xóa.
                </p>
                <Button
                  onClick={() => {
                    closeSecondModal()
                    window.location.reload()
                  }}
                  variant="contained"
                  sx={{ mt: 3, mb: 2, width: 150 }}
                >
                  OK
                </Button>
              </Box>
            </Modal>
        </div>
    )
}
export const PrinterTable = ({searchstring, rows}) => {
    const [page, setPage] = React.useState(0);
    const [printerInfo, setPrinterInfo] = React.useState(null);

    // const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const filteredRows = rows.filter((row) => {
      if (searchstring === ''){
        return row;
      }
      else return row.location.toLowerCase().includes(searchstring);
    })

    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5001/api/printers');
          console.log(response.data);
          setPrinterInfo(response.data.printers);
        } catch (error) {
          console.error(error);
        } finally {
          console.log('End load - printers!');
        }
      };
    
      fetchData();
    }, []);
    
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) - filteredRows.length) : 0;
    if (filteredRows.length < maxRows*(page - 1))
      if (page >= 1) setPage(0);
    return (
      <Paper sx={{
        marginTop: 1,
        backgroundColor: 'transparent'
      }}>
        <TableContainer component={Paper} sx={{borderRadius: '20px', border: '1px solid black', boxShadow: 'none'}}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead sx={{
                  borderBottom: "5px solid #D9D9D9"
                }}>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="left" style={{width: 200}}>Name</TableCell>
                        <TableCell align="left" style={{width: 200}}>Location</TableCell>
                        <TableCell align="left" style={{width: 200}}>Remaining Page</TableCell>
                        <TableCell align="left" style={{width: 200}}>State</TableCell>
                        <TableCell align="left"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                { printerInfo ? (printerInfo.map((printer) => (
                    <TableRow
                    key={printer.printerId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="rows">
                            {printer.printerId}
                        </TableCell>
                        <TableCell align="left">Máy in {printer.printerId}</TableCell>
                        <TableCell align="left">{printer.location.room} - {printer.location.building} - {printer.location.campus}</TableCell>
                        <TableCell align="left">{printer.pagesRemaining}</TableCell>
                        <TableCell align="left"><PrinterStatus status={printer.status} remainingPage={printer.pagesRemaining} /></TableCell>
                        <TableCell align="left"><EditPrinter id={printer.printerId} /></TableCell>
                        <TableCell align="left"><DeletePrinter id={printer.printerId} /></TableCell>
                    </TableRow>
                ))) : (
                  <CircularProgress />
                )} 
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