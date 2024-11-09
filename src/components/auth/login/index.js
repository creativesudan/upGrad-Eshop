import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {Avatar, Box, Button, Container, TextField, Typography} from '@mui/material';
import { pink } from '@mui/material/colors';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Link } from "react-router-dom";


const navs = [{label:'Home', link:'home'}];



export default function Login(props) {
  
  return (
    <>
    <Container maxWidth='xs'>
    <Box sx={{alignItems:'center', justifyContent:'center', display:'flex', mt:6}}>
      <Avatar sx={{ bgcolor: pink[500]}}>
          <LockOutlinedIcon />
      </Avatar>
    </Box>
    <Typography sx={{my:2}} align={'center'}>Sign in</Typography>

        <Box sx={{my:2}}>
            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Email Address"
                // defaultValue="Hello World"
            />
        </Box>
        <Box sx={{my:2}}>
        <TextField
            required
            fullWidth
            id="outlined-required"
            label="Password"
        />
        </Box>
        <Box sx={{my:2}}>
            <Button component={Link} to="/listing" variant="contained" fullWidth={true}>Sign in</Button>
        </Box>
    <Link to='/signup'>Don't have an account? Sign Up</Link>

  
    </Container>
    </>
  );
}
