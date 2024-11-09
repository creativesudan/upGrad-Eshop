import React from 'react';
import {Link, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import SearchIcon from '@mui/icons-material/Search';




export default function AppFooter(props) {
  
  const {login} = props;

  return (
    <Typography sx={{my:6}} variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="primary" href="https://mui.com/">
      upGrad
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
  );
}
