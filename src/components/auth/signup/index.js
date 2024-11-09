import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {Avatar, Box, Button, Container, TextField, Typography} from '@mui/material';
import { pink } from '@mui/material/colors';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Link } from "react-router-dom";


const navs = [{label:'Home', link:'home'}];



export default function Signup(props) {
  
  return (
    <>
    <Container maxWidth='xs'>
    <Box sx={{alignItems:'center', justifyContent:'center', display:'flex', mt:6}}>
      <Avatar sx={{ bgcolor: pink[500]}}>
          <LockOutlinedIcon />
      </Avatar>
    </Box>
    <Typography sx={{my:2}} align={'center'}>Sign Up</Typography>
        <Box sx={{my:2}}>
            <TextField
                fullWidth
                required
                id="outlined-required"
                label="First Name"
                // defaultValue="Hello World"
            />
        </Box>

        <Box sx={{my:2}}>
            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Last Name"
                // defaultValue="Hello World"
            />
        </Box>

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
            fullWidth
            required
            id="outlined-required"
            label="Password"
        />
        </Box>
        
        <Box sx={{my:2}}>
        <TextField
            fullWidth
            required
            id="outlined-required"
            label="Confirm Password"
        />
        </Box>
        
        <Box sx={{my:2}}>
        <TextField
            fullWidth
            required
            id="outlined-required"
            label="Contact Number"
        />
        </Box>
        <Box sx={{my:2}}>
            <Button variant="contained" fullWidth={true}>Sign Up</Button>
        </Box>
    <Typography align='right'>
        <Link to='/login' align='right' variant="body2">Already have an account? Sign In</Link>
    </Typography>

    
    
    </Container>
    </>
  );
}
