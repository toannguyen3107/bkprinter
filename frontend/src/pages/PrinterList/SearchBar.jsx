import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import data from "./data.json";
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
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const SearchBar = () => {
  const [rows, setRows] = React.useState(data);
  const [searched, setSearched] = React.useState("");

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearched(e.target.value.toLowerCase());
  }

  // React.useEffect(() => {
  //   data()
  //     .then(res => setList(res))
  // }, [])

  return (
    <Box sx={{ 
        flexGrow: 1
    }}>
      <AppBar position="static">
        <Toolbar sx={{
            backgroundColor: "white"
        }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ 
                flexGrow: 1, 
                display: { xs: 'none', sm: 'block' },
                color: "black"
            }}
          >
            DANH SÁCH MÁY IN
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Tìm máy in…"
              inputProps={{ 'aria-label': 'search' }}
              onSelect={handleInput}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <PrinterTable searchstring={searched} rows={rows} />
    </Box>
  );
}