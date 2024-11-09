import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar,  Box, Toolbar, IconButton, Typography, InputBase, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link } from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
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
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));





export default function AppHeader(props) {
  
  const {login} = props;

  const navs =  login ? 
  [{label:'Home', link:'home'}] : 
  [
    {label:'Login', link:'login'},
    {label:'Sign Up', link:'signup'},
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{display:'flex', alignItems:'center'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <ShoppingCartIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            upGrad E-Shop
          </Typography>
          </Box>
          <Box sx={{flexGrow:1, display:'flex', justifyContent:'center'}}>
            <Box>
              {login && 
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
              }
            </Box>
          </Box>
     
          <Box sx={{ display: { xs: 'none', md: 'flex', alignItems:'center' } }}>
            {navs.map((e) => (
              <Box sx={{marginLeft:2, marginRight:2}}>
                <Link to={e.link} style={{ color: '#FFF' }}>
                  {e.label}
                </Link>
              </Box>

              // <Button
              //   key={page}
              //   sx={{ my: 2, color: 'white', display: 'block' }}
              // >
              //   {page}
              // </Button>
            ))}
             {login && 
            <Box sx={{marginLeft:2}}>
              <Button variant="contained" color="error">
                Logout {login}
              </Button>
            </Box>
            }
          </Box>
            
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}
