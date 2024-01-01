import React, { useEffect, useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
// import data from "./data.json";
import { PrinterTable } from "./Table";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '22ch',
      '&:focus': {
        width: '32ch',
      },
    },
  },
}));

export const SearchBar = () => {
  const [rows, setRows] = useState([]);
  const [searched, setSearched] = useState('');

  useEffect(() => {
    // Fetch data from the server
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/printers/');
      const data = await response.json();
      setRows(data.printers);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    console.log(rows);
  };

  const handleInput = (e) => {
    setSearched(e.target.value.toLowerCase());
  };

  useEffect(() => {
    // Fetch data from the server when the search term changes
    fetchData();
  }, [searched]);

  return (
    <Box sx={{ 
        flexGrow: 1,
    }}>
      <AppBar position="static" sx={{
        backgroundColor: 'white',
        borderRadius: '1rem',
      }}>
        <Toolbar sx={{
            backgroundColor: "white",
            borderRadius: '1rem',
        }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ 
                flexGrow: 1, 
                display: { xs: 'none', sm: 'block' },
                color: "black",
            }}
          >
            DANH SÁCH MÁY IN
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Tìm máy in… (theo địa chỉ)"
              inputProps={{ 'aria-label': 'search' }}
              onSelect={handleInput}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <PrinterTable searchstring={searched} rows={rows}/>
    </Box>
  );
}