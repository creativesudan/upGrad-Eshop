import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Chip, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';

const products = [
    { name:'Product Name', price: '$1000', thumb:'contemplative-reptile.jpg', desc: 'izards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
    { name:'Product Name', price: '$1000', thumb:'contemplative-reptile.jpg', desc: 'izards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
    { name:'Product Name', price: '$1000', thumb:'contemplative-reptile.jpg', desc: 'izards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
    { name:'Product Name', price: '$1000', thumb:'contemplative-reptile.jpg', desc: 'izards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
    { name:'Product Name', price: '$1000', thumb:'contemplative-reptile.jpg', desc: 'izards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
    { name:'Product Name', price: '$1000', thumb:'contemplative-reptile.jpg', desc: 'izards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
]

const category = [
    {label:'apparel', value:1},
    {label:'electronics', value:2},
    {label:'personal care', value:3}
]

export default function Product() {
     const [alignment, setAlignment] = useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };


  return (
    <>
    <Container maxWidth="lg"> 
      
    <Box sx={{display:'flex', justifyContent:'center', my:2}}>
        <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        >
        <ToggleButton value="web">All</ToggleButton>
            {category.map((e)=>
                <ToggleButton value={e.value}>{e.label}</ToggleButton>
            )}
        </ToggleButtonGroup>
    </Box>



    <Grid  sx={{
    justifyContent: "center",
    alignItems: "center",
  }} container rowSpacing={1}>

        <Grid item xs={5}>
        <CardMedia
        component="img"
        width="100%"
        image="https://static.digit.in/default/apple-iphone-14-pro-max-2385bb85d3.jpeg"
        alt="Paella dish"
      />
        </Grid>

        <Grid>
            <Box sx={{display:'flex', alignSelf:'center', alignItems:'center'}}>
                <Typography variant='h4'>iPhone 12</Typography>
                <Chip label="Available Quantity: 148" color="primary" sx={{marginLeft:2}}/>
            </Box>
            <Typography sx={{my:2}}>Category: <b>Electronics</b></Typography>
            <Typography sx={{marginY:2}}>izards are a widespread group of squamate reptiles, with over 6,000 species</Typography>
            <Typography sx={{marginY:2}} variant='h4' color='#f00'>$10000</Typography>
            <TextField sx={{marginY:2}} 
                required
                size="small"
                id="outlined-required"
                label="Enter Quantity"
            />
            <div>
                <Button component={Link} to="/checkout" variant="contained">Place Order</Button>
            </div>
        </Grid>
      
    </Grid>
    </Container>
    </>
    
  );
}